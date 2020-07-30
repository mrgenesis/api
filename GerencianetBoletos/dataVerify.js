function dataVerify() {
  return {
    name: function (name) {
      const rule = /^[ ]*(.+[ ]+)+.+[ ]*$/;
      return rule.test(name);
    },
    cpf: function (cpf) {
      cpf = cpf.toString();
      let basicCpf = cpf.substr(0, 9)
      , first = secund = 0;
      if (cpf.length !== 11) {
        return false;
      }
      for (let i = 0, max = basicCpf.length, multiplicator = 10; i < max; i++, multiplicator--) {
          first += basicCpf[i] * multiplicator;
      }
      first = first % 11;
      first = (first === 0 || first === 1) ? 0 : 11 - first;
      basicCpf = basicCpf + "" + first;

      for (let i = 0, max = basicCpf.length, multiplicator = 11; i < max; i++, multiplicator--) {
        secund += basicCpf[i] * multiplicator;
      }
      secund = secund % 11;
      secund = (secund === 0 || secund === 1) ? 0 : 11 - secund;
      basicCpf = basicCpf + "" + secund;
      return basicCpf === cpf;
    },
    phone: function (phone) {
      let rule = /^[1-9]{2}9?[0-9]{8}$/;
      return rule.test(phone);
    }
  }
}

module.exports = dataVerify();