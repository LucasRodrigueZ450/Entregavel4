const { isPrime } = require('../js/Primo');

test('Verificar se 7 é primo', () => {
  expect(isPrime(7)).toBe(true);
});

test('Verificar se 10 não é primo', () => {
  expect(isPrime(10)).toBe(false);
});