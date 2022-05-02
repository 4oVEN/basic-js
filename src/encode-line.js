const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  const arr = str.toString();
  function rep(match) {
    return `${match.length}${match[0]}`;
  }
  return arr.replace(/([a-z])\1+/g, rep);
}

module.exports = {
  encodeLine
};
