const { name, cpf } = require('../GerencianetBoletos/dataVerify');
const expect = require('chai').expect;

describe('dataVerify', function () {
  it('[name]: Verifica se o nome está no formato correto.', function () {
    expect(name("joao")).to.equal(false);
    expect(name("joao d")).to.equal(true);
    expect(name("j d")).to.equal(true);
  });
  it('[cpf]: Verifica se o CPF é válido', function () {
    expect(cpf(111444)).to.equal(false);
    expect(cpf(111444777357)).to.equal(false);
    expect(cpf(11144477735)).to.equal(true);
  });
});