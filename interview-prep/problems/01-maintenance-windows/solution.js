/**
 * Before coding: fill in NOTES.md (restatement, state, complexity).
 * @param {number[][]} windows
 * @return {number[][]}
 */

// Example with the given windows: [[8,10],[1,3],[2,6],[15,18],[6,7]]
function mergeWindows(windows) {
    let nextStart; 
    // Sort the windows (extract the minimum start from windows and sort based on it)
    // -> [[1, 3], [2,6], [6,7], [8,10], [15,18]]
    let sortedWindows = [...windows].sort((a, b) => a[0] - b[0])
    let mergedWindows = [[...sortedWindows[0]]]; // [[1,3]]

    // i = 1
        // sortedWindows[i] = [2,6]
        // currentEnd = 3
        // nextStart = 2
        // branch = if (nextStart <= currentEnd): the windows overlap, extend the last window's end
        // mergedWindows after = [[1,6]]
    // i = 2
        // sortedWindows[i] = [6,7]
        // currentEnd = 6
        // nextStart = 6
        // branch = if (nextStart <= currentEnd): the windows overlap, so you extend the last window's end
        // mergedWindows after = [[1,7]]
    // i = 3
        // sortedWindows[i] = [8,10]
        // currentEnd = 7
        // nextStart = 8
        // branch = else: no overlap, push the window as a new one
        // mergedWindows after = [[1,7], [8,10]]
    // i = 4
        // sortedWindows[i] = [15,18]
        // currentEnd = 10
        // nextStart = 15
        // branch = else: no overlap, push the window as a new one
        // mergedWindows after = [[1,7], [8,10], [15,18]]
    // exit
    for (let i = 1; i < sortedWindows.length; i++) {
        const currentEnd = mergedWindows[mergedWindows.length - 1][1];
        nextStart = sortedWindows[i][0];

        if (nextStart <= currentEnd) {
            mergedWindows[mergedWindows.length - 1][1] = 
                Math.max(currentEnd, sortedWindows[i][1]);
        } else {
            mergedWindows.push([...sortedWindows[i]]);
        }
    }
    
    return mergedWindows;

}

module.exports = { mergeWindows };
