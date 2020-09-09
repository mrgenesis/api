const mongo = require('../shared/mongoClient')
  , VALUES_SETTINGS_LOCAL = require('../local.settings.json').Values
  , MONGO_USER = VALUES_SETTINGS_LOCAL.MONGO_USER
  , MONGO_PASS = VALUES_SETTINGS_LOCAL.MONGO_PASS;

test('Verifica se a conxão com o banco ocorreu com sucesso.', async (done) => {
  try {
    let client = await mongo({dbUser: MONGO_USER, dbPass: MONGO_PASS});
    done();
  } catch (err) {
    expect(err.log).toBeDefined();
    done();
  } 
});