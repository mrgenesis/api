const settingPrice = require('../GerencianetBoletos/settingPrice');

describe('Verifica se os valores passados como parâmetro estão sendo configurados corretamente', () => {
  test('Um valor float com apenas um digito decimal. Ex 49.9 ou "49.9" deve retornar "4990"', () => {
    expect(settingPrice(49.9)).toBe('4990');
    expect(settingPrice("49.9")).toBe('4990');
  });
  test('Um valor float com dois digitos decimais. Ex 49.95 ou "49.95" deve retornar "4995"', () => {
    expect(settingPrice(49.95)).toBe('4995');
    expect(settingPrice("49.95")).toBe('4995');
  });
  test('Um valor int. Ex 49 ou "49" deve retornar "4900"', () => {
    expect(settingPrice(49)).toBe('4900');
    expect(settingPrice("49")).toBe('4900');
  });
});