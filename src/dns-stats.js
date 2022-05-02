const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const dictionary = {};
  const reverseArr = domains.map((el) => el.split(".").reverse());
  for (let i = 0; i < reverseArr.length; i++) {
    for (let j = 1; j < reverseArr[i].length + 1; j++) {
      const item = reverseArr[i].slice(0, j).join(".");
      if (dictionary[`.${item}`] === undefined) {
        dictionary[`.${item}`] = 1;
      } else {
        dictionary[`.${item}`]++;
      }
    }
  }
  return dictionary;
}

module.exports = {
  getDNSStats
};
