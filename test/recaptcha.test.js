const recaptcha = require("../shared/recaptcha")
  , expect = require('chai').expect
  , secret = require('../local.settings.json').Values.G_RECAPTCHA;

describe('recaptcha', function () {
  describe('Testa se o modulo está respondendo corretamente.', function () {
    it.skip('A resposta deve ser um Obj de erro, porque não é informado <secret> nem <response>.', async function () {
      const result = await recaptcha({ secret: null, tokenRecaptcha: null });
      expect(result).to.have.property('error-codes');
    });
    it.skip('A resposta deve ser um Obj de erro, porque não é passado <response>.', async function () {
      const result = await recaptcha({secret});
      expect(result).to.have.deep.property(['error-codes'][0], ['invalid-input-response']);
    });
  });
});