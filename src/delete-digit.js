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
  const variants = [...n.toString()].map((el, i, arr) => {
    return arr.filter((item, index) => i !== index).join("");
  });
  return Number(variants.sort((a, b) => Number(b) - Number(a))[0]);
}

module.exports = {
  deleteDigit
};
