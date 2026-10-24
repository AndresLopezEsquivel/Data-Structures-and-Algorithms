# Notes · 01 Maintenance Windows

## 1. Restatement (my own words)
The problem asks me to return a list of windows sorted by start times. To do so, I need to unify the overlapping hours, including those whose end time and start time state the same hour. In this case, from overlapping times, I need to get the minimum start time and maximum end time to cover the "union" time slot of both windows.
Example, we have [1,3], [2,6], [6,7]. The union would be [1,7]. [1, 3] and [6,7] do not overlap, but the window in the middle falls between both. So they unify.

## 2. State / approach / complexity
- State:
- Invariant:
- Exit condition:
- Time:
- Space:

## 3. Hand trace


## 4. Bugs that showed up

