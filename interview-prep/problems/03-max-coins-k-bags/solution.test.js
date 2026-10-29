const { test } = require('node:test');
const assert = require('node:assert/strict');
const { maximumCoins } = require('./solution');

test('example 1 from the problem statement', () => {
  assert.equal(maximumCoins([[8, 10, 1], [1, 3, 2], [5, 6, 4]], 4), 10);
});

test('example 2 from the problem statement', () => {
  assert.equal(maximumCoins([[1, 10, 3]], 2), 6);
});

// TODO (you): add at least 3 edge cases BEFORE coding.
// Ask yourself: what inputs would break a naive solution?
