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
test('three identical windows', () => {
  assert.deepEqual(
    mergeWindows([[8, 10], [1, 3], [1, 3], [1, 3], [6, 7]]),
    [[1,3], [6, 7], [8, 10]]
  );
});

test('windows contained in a larger one → merge into the larger window', () => {
  assert.deepEqual(
    mergeWindows([[1, 7], [1, 3], [1, 4], [1, 5], [1, 6]]),
    [[1,7]]
  );
});

test('touching endpoints, they merge', () => {
  assert.deepEqual(
    mergeWindows([[1,3],[3,5]]),
    [[1,5]]
  );
});

test('one-window', () => {
  assert.deepEqual(
    mergeWindows([[8,10]]),
    [[8, 10]]
  );
});