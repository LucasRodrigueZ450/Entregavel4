const { countValuesInRange } = require('../js/Contagem');

test('Contar valores entre 5 e 10 em um conjunto de dados', () => {
  expect(countValuesInRange([1, 4, 7, 9, 11, 13], 5, 10)).toBe(2);
});