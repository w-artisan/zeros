module.exports = function zeros(expression) {
  let arrFs = expression.split('*');
  let arrF1 = [];
  let arrF2 = [];

  for (let i = 0; i < arrFs.length; i++) {
    if (arrFs[i].slice(-2) === '!!') {
      arrF2.push(BigInt(arrFs[i].slice(0, arrFs[i].length - 2)));
    } else if (arrFs[i].slice(-1) === '!') {
      arrF1.push(BigInt(arrFs[i].slice(0, arrFs[i].length - 1)));
    } else {
      return console.log('ERROR: not a factorial');
    }
  }

  function f1(num) {
    return num ? num * f1(num - BigInt(1)) : BigInt(1);
  }

  function f2(num) {
    return num > 0 ? num * f2(num - BigInt(2)) : BigInt(1);
  }

  let resF1 = BigInt(1);
  let resF2 = BigInt(1);
  let init = BigInt(1);

  if (arrF1.length != 0) {
    resF1 = arrF1.reduce((acc, val) => {
      return acc * f1(val);
    }, init);
  }

  if (arrF2.length != 0) {
    resF2 = arrF2.reduce((acc, val) => {
      return acc * f2(val);
    }, init);
  }
  let resNum = resF1 * resF2;

  let regExpr = /0+$/;
  let result = regExpr.exec(resNum + '');

  if (result === null) {
    result = 0;
  } else {
    result = regExpr.exec(resNum + '')[0].length;
  }

  return result;
};
