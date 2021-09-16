const { sum } = require('../../docs/tu0X/scripts/operations');

describe('Unit-0X business logic', function () {
  it('Sum function', function () {
    expect(sum(2, 3)).toBe(5);
  });
});
