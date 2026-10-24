const { test } = require('node:test');
const assert = require('node:assert/strict');
const { mergeWindows } = require('./solution');

test('example from the problem statement', () => {
  assert.deepEqual(
    mergeWindows([[8, 10], [1, 3], [2, 6], [15, 18], [6, 7]]),
    [[1, 7], [8, 10], [15, 18]]
  );
});

// TODO (you): add at least 3 edge cases BEFORE coding.
// Ask yourself: what inputs would break a naive solution?
