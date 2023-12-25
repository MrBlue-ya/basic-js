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
  let num = null;
  let strN = n.toString().split('');
  for (let i = 0; i < strN.length; i++) {
    num = strN.splice(i, 1);
  }
  return num;
}

console.log(deleteDigit(109))

module.exports = {
  deleteDigit
};
