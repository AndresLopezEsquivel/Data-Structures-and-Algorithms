# Notes · 01 Maintenance Windows

## 1. Restatement (my own words)
The problem asks me to return a list of windows sorted by start times. To do so, I need to unify the overlapping hours, including those whose end time and start time state the same hour. In this case, from overlapping times, I need to get the minimum start time and maximum end time to cover the "union" time slot of both windows.
Example, we have [1,3], [2,6], [6,7]. The union would be [1,7]. [1, 3] and [6,7] do not overlap, but the window in the middle falls between both. So they unify.
My approach would be sorting windows by start time. Once I sort and merge two overlapping windows, I compare my current window's end to next window's start by using <=, if that is the case, they merge.

## 2. State / approach / complexity
- State:
    <!-- The next window -->
    let next
    <!-- The new array of merged windows -->
    let mergedWindows;
- Invariant:
    After processing window i, the merged array is sorted by start, no two windows in it overlap, and together they cover exactly the time of windows 0..i
- Exit condition:
    Exit when there are no more windows to compare
    Once the loop ends, I need to return mergedWindows
    On else, when the windows do not overlap anymore, we add a new window and compare next to the window against it
- My steps would be: 
1. State 2 variables: next and mergedWindows
 <!-- a general sort is O(n log n), never O(n). -->
2. Sort array by start time
3. Loop through windows 
<!-- The work as n (number of windows) grows. -->
- Time: sort (O (n log n)) + loop (O(n)) = O (n log n)
<!-- The extra memory your algorithm creates beyond the input, again as a function of n. -->
- Space: O(n)

## 3. Hand trace

[[8,10],[1,3],[2,6],[15,18],[6,7]]
<!-- After sorting by start time -->
[[1, 3], [2,6], [6,7], [8,10], [15,18]]
<!-- First pass (merge [1,3] and [2,6]) -->
[[1, 6], [6,7], [8,10], [15,18]]
<!-- Second pass (merge [1,6] and [6,7], first window'end time and next one's start overlap) -->
[[1,7], [8,10], [15,18]]
<!-- On the last pass, nothing to merge, there is no overlap, return windows list (a new array) -->
[[1,7], [8,10], [15,18]]

## 4. Bugs that showed up

