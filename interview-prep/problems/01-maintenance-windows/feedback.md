# Feedback · 01 Maintenance Windows

**Date:** 2026-10-24 · **Pattern:** sorting + intervals · **Result:** 5/5 tests pass, input not mutated

## Verdict

**Correct, but over time.** The final solution is right, has the right complexity (O(n log n) time, O(n) space), and leaves the caller's input untouched. In the real OA, though, the clock would have run out during planning, about 48 minutes in with no code written, so it would have scored 0 test cases. Speed of execution is now the main thing to work on, not understanding.

## Timeline

| Phase | What happened |
|---|---|
| Restatement | First version only mentioned sorting. It needed prompting to cover merging, touching endpoints, and chains (`[1,3]`,`[2,6]`,`[6,7]` → `[1,7]`). |
| Approach | Arrived at "sort by start, then compare with the last merged window." Comparing neighbors in the **unsorted** list was tried first. |
| State / invariant | The invariant ended up precise. State started with redundant variables (`minStart`, `maxEnd`, `current`). |
| Complexity | The sort was first called O(n), then O(n²). The fundamentals needed reviewing before O(n log n) made sense. |
| Edge cases | 4 cases added. Expected outputs were copied from the example twice, and the touching test first passed even with a `<` bug. |
| Coding | About 15 small fix cycles, mostly bug #1 (index vs value). |
| Senior review | Found and fixed a shallow-copy aliasing bug that changed the caller's input. |

## Strengths

- **Precise invariant:** "merged array is sorted, non-overlapping, and covers exactly windows 0..i."
- **Good tests once fixed:** the touching-endpoint test now fails if `<=` becomes `<`. A test only matters if it can fail.
- **Incremental checking:** checking the sort in isolation before writing the loop is a senior habit.
- **Not mutating the input:** you thought of `[...windows]` without a prompt, and later fixed the deeper aliasing.
- **Stuck points became clear questions.** Asking for the time/space fundamentals was the right call.

## Recurring bugs observed

| # | Bug | Where it appeared |
|---|---|---|
| 1 | **Index vs value** | `windows[0]` as a start time · `.length[-1]` · `windows.entries()` · `sortedWindows[i]` used as a start · `[i]` instead of `[1]` for the end · trace labeled `i = 1 → [1,3]` and `i = 5` |
| 2 | **Wrong complexity** | Sort called O(n), then O(n²) |
| 3 | **Exit / return placement** | "Exit when `<=` fails" and "exit on else" (the else branch adds a window, it doesn't stop) |
| 4 | **`const` for reassigned values** | `const start/end` in planning · reassigned `const currentEnd` |

**New bugs to add to the list:**
- **`.sort()` without a comparator** sorts as strings, so `[10,12]` lands before `[9,10]`.
- **`a - b` on arrays** gives `NaN`, so the sort silently does nothing.
- **Window vs array of windows:** `[1,3]` vs `[[1,3]]` (hit twice).
- **Shallow copy:** `[...arr]` copies the arrows, not the inner arrays.
- **Python-isms:** `arr[-1]` is `undefined` in JS; arrays use `.push`, not `.add`.
- **Typo with a similar name:** `mergeWindows.push` (the function) vs `mergedWindows`.

## Concepts to review

1. **Big-O basics:** sequential steps add (keep the biggest), nested steps multiply, and `.sort()` = O(n log n). See `asymptotic-analysis/02-simplification-and-growth-rates/`.
2. **References vs values in JS:** assigning a number copies it; assigning an array copies the reference. Writing to a copied number never changes the array.
3. **Tests that can fail:** for each test, ask "which bug would make this fail?" If the answer is none, change the input.

## Action plan for problem 02

- [ ] **Hard cap of 10 minutes on planning.** Restatement, state, invariant, complexity, then code. Polish the notes afterward.
- [ ] **Say "position or thing?" out loud** every time you type `[ ]`.
- [ ] **Always pass a comparator** to `.sort()` for numbers.
- [ ] **Write expected outputs from the test's own input**, never copied from another test.
- [ ] Before writing each variable, decide whether it gets reassigned. If yes, use `let`.
- [ ] Run tests with `node --test problems/<dir>/solution.test.js` (Node 24 doesn't accept a folder path).
