const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = null;
  let numberStr = n.toString();

  if (numberStr.length === 1) {
    return n;
  }

  for (let i = 0; i < numberStr.length; i++) {
    const currentNumber = parseInt(numberStr.slice(0, i) + numberStr.slice(i + 1));

    if (currentNumber > maxNum) {
      maxNum = currentNumber;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
