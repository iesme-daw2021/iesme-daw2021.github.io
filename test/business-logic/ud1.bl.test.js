const { sum } = require('../../docs/scripts/operations');

describe('Ud1 business logic', function () {
  it('Sum function', function () {
    expect(sum(2, 3)).toBe(5);
  });
});
