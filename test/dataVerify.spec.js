const { name } = require('../GerencianetBoletos/dataVerify');
const expect = require('chai').expect;

describe('dataVerify', function () {
  it('[name]: Verifica se o nome está no formato correto.', function () {
    expect(name("joao")).to.equal(false);
    expect(name("joao d")).to.equal(true);
    expect(name("j d")).to.equal(true);
  });
});