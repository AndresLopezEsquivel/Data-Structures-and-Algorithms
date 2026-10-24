# 01 · Maintenance Windows

**Target pattern:** sorting + intervals · **Time:** 30 min (clock starts after the restatement)

## Problem

Amazon's fulfillment center schedules **maintenance windows** for its conveyor belts. You receive a list `windows`, where each element is `[start, end]` (integers, `start <= end`) representing a time window during which a belt is offline. The list is **not sorted**. Operations wants a consolidated report: any windows that overlap must be combined into a single window. Two windows that only touch at an endpoint (e.g. `[1,3]` and `[3,5]`) are considered overlapping. Return the consolidated list of windows, sorted by start time.

**Example:** `windows = [[8,10],[1,3],[2,6],[15,18],[6,7]]` → `[[1,7],[8,10],[15,18]]`

**Constraints:** `1 <= windows.length <= 10^5`, `0 <= start <= end <= 10^9`

## Protocol
1. Restate it in your own words (in `NOTES.md`).
2. Trace the example by hand.
3. Write state, invariant, exit condition, and complexity.
4. Add 3+ edge cases to `solution.test.js`.
5. Code → `node --test` → trace your code on an example.

## Retro (when done)
- Actual time:
- Bug that showed up:
- What I'd do differently:
