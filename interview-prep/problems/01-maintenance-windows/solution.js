/**
 * Before coding: fill in NOTES.md (restatement, state, complexity).
 * @param {number[][]} windows
 * @return {number[][]}
 */
// Example with the given windows: [[8,10],[1,3],[2,6],[15,18],[6,7]]
function mergeWindows(windows) {
    let nextStart; 
    // 1. Sort the windows (extract the minimum start from windows and sort based on it)
    let sortedWindows = [...windows].sort((a, b) => a[0] - b[0])
    let mergedWindows = [sortedWindows[0]]; // Example: [[1,3]]

    for (let i = 1; i < sortedWindows.length; i++) {
        const currentEnd = mergedWindows[mergedWindows.length - 1][1];
        nextStart = sortedWindows[i][0];

        if (nextStart <= currentEnd) {
            mergedWindows[mergedWindows.length - 1][1] = 
                Math.max(currentEnd, sortedWindows[i][1]);
        } else {
            mergedWindows.push(sortedWindows[i]);
        }
    }
    
    return mergedWindows;

}

module.exports = { mergeWindows };
