const { sum } = require('../js/somatorio');

test('Somar um conjunto de números', () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});