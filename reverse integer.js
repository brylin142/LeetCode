// /**
//  * @param {number} x
//  * @return {number}
//  */

var reverse = function (x) {
  let y = Math.abs(x).toString().split("").reverse().join("");
  if (x < 0) y = "-".concat(y);
  y = parseInt(y);
  if (y < Math.pow(-2, 31) || y > Math.pow(2, 31) - 1) return 0;
  else return y;
};