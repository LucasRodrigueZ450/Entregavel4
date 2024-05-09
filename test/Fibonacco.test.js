const { fibonacci } = require('../js/Fibonacci');

test('Verificar os primeiros 10 termos da sequência de Fibonacci', () => {
  expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});