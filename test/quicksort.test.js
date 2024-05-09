const { quicksort } = require('../js/quicksort');

test('Ordenar array [3, 2, 1, 4, 5] corretamente', () => {
  expect(quicksort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});