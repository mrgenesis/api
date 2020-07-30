function dataVerify() {
  return {
    name: function (name) {
      const rule = /^[ ]*(.+[ ]+)+.+[ ]*$/;
      return rule.test(name);
    }
  }
}

module.exports = dataVerify();