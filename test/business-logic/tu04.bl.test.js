const { sum } = require('../../docs/tu04/scripts/operations');

describe('Unit-04 business logic', function () {
  it('Sum function', function () {
    expect(sum(2, 3)).toBe(5);
  });
});
