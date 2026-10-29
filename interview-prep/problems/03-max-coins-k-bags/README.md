# 03 · Maximum Coins From K Consecutive Bags

**Target pattern:** sorting + sliding window over intervals · **Time:** 30 min (clock starts after the restatement)

## Problem

There are infinitely many bags on a number line, one bag at every coordinate. Some of these bags contain coins.

You receive a 2D array `coins`, where `coins[i] = [l, r, c]` means that **every bag** from coordinate `l` to coordinate `r` (inclusive) contains `c` coins. Bags not covered by any segment contain 0 coins. The segments in `coins` are **non-overlapping** and **not sorted**.

You also receive an integer `k`. Return the **maximum** number of coins you can collect by picking `k` **consecutive** bags.

**Example 1:** `coins = [[8,10,1],[1,3,2],[5,6,4]]`, `k = 4` → `10`
Pick bags `[3, 4, 5, 6]`: `2 + 0 + 4 + 4 = 10`.

**Example 2:** `coins = [[1,10,3]]`, `k = 2` → `6`
Pick bags `[1, 2]`: `3 + 3 = 6`.

**Constraints:**
- `1 <= coins.length <= 10^5`
- `1 <= k <= 10^9`
- `coins[i] == [l, r, c]`
- `1 <= l <= r <= 10^9`
- `1 <= c <= 1000`
- The given segments are non-overlapping.

## Protocol
1. Restate it in your own words (in `NOTES.md`).
2. Trace the examples by hand.
3. Write state, invariant, exit condition, and complexity.
4. Add 3+ edge cases to `solution.test.js`.
5. Code → `node --test problems/03-max-coins-k-bags/solution.test.js` → trace your code on an example.

## Retro (when done)
- Actual time:
- Bug that showed up:
- What I'd do differently:
