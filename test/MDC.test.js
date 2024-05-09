const { mdc } = require('../js/MDC');


test('Máximo divisor comum de 8 e 12 é 4', () => {
  expect(mdc(8, 12)).toBe(4);
});