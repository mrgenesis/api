module.exports = value => {
      let numArr = value.toString().split(".")
      , decimal = ""
      , decimalLen;

      if (numArr[1]) {
          decimalLen = numArr[1].length;
      } else {
          decimalLen = 0;
      }

      switch (decimalLen) {
      case 0:
          decimal = "00";
          break;
      case 1:
          decimal = numArr[1] + "" + "0";
          break;
      case 2:
          decimal = numArr[1];
          break;
      default:
          decimal = numArr[1].substr(0, 2);
      }

    return numArr[0] + "" + decimal;
};