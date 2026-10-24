const { test } = require('node:test');
const assert = require('node:assert/strict');
const { topKFrequent } = require('./solution');

test('example from the problem statement', () => {
  assert.deepEqual(topKFrequent([3, 1, 1, 2, 2, 2, 4, 3], 2), [2, 1]);
});

// TODO (you): add at least 3 edge cases BEFORE coding.
// Ask yourself: what inputs would break a naive solution?
