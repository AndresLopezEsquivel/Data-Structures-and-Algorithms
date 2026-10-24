# 02 · Top K Frequent Products

**Target pattern:** hash map + sorting (or heap / bucket sort) · **Time:** 30 min (clock starts after the restatement)

## Problem

Amazon's analytics team logs every product view. You receive an array `views`, where each element is a product ID (integer), and an integer `k`. Return the `k` product IDs that were viewed **most often**.

Order the result by view count, **highest first**. If two products have the same count, the one with the **smaller ID** comes first.

**Example:** `views = [3, 1, 1, 2, 2, 2, 4, 3]`, `k = 2` → `[2, 1]`

**Constraints:** `1 <= views.length <= 10^5`, `0 <= views[i] <= 10^9`, `1 <= k <= number of distinct IDs in views`

## Protocol
1. Restate it in your own words (in `NOTES.md`).
2. Trace the example by hand.
3. Write state, invariant, exit condition, and complexity.
4. Add 3+ edge cases to `solution.test.js`.
5. Code → `node --test problems/02-top-k-frequent/solution.test.js` → trace your code on an example.

## Retro (when done)
- Actual time:
- Bug that showed up:
- What I'd do differently:
