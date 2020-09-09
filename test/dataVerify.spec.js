const { name, cpf, phone, value } = require('../GerencianetBoletos/dataVerify');
const dataVerify  = require('../GerencianetBoletos/dataVerify');
const expect = require('chai').expect;

describe('dataVerify', function () {
  it.skip('[name]: Verifica se o nome está no formato correto.', function () {
    expect(name("joao")).to.equal(false);
    expect(name("joao d")).to.equal(true);
    expect(name("j d")).to.equal(true);
  });
  it.skip('[cpf]: Verifica se o CPF é válido', function () {
    expect(cpf(111444)).to.equal(false);
    expect(cpf(111444777357)).to.equal(false);
    expect(cpf(11144477735)).to.equal(true);
  });
  it.skip('[phone]: Verifica se o telefone está no formato correto.', function () {
    expect(phone(0099995555)).to.equal(false);
    expect(phone(1199995555)).to.equal(true);
    expect(phone(11799995555)).to.equal(false);
    expect(phone(11999995555)).to.equal(true);
    expect(phone(999995555)).to.equal(false);
  });
  it.skip('[value]: Verifica se o valor atende o padrão da Gerencianet.', function () {
    expect(value(5.7)).to.equal('570');
    expect(value(5.99)).to.equal('599');
    expect(value(57)).to.equal('5700');
  });
  it.skip('[all]: Faz validação de Nome, CPF, e Telefone ao mesmo tempo (name, cpf, phone).', function () {
    let test = {name: "Joao R", cpf: "11144477735", phone: "1198985645"};
    expect(dataVerify.all(test)).to.equal(true);
  });
});