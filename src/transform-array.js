const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
  let resArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') resArr.push(arr[i + 1])
    else if (arr[i] == '--double-prev') {
      if (i !== 0 && arr[i - 2] !== '--discard-next') resArr.push(arr[i - 1])
    }
    else if (arr[i] == '--discard-next') i++
    else if (arr[i] == '--discard-prev') {
      if (resArr.length !== 0 && arr[i - 2] !== '--discard-next') resArr.pop()
    } else {
      resArr.push(arr[i])
    }
  }
  return resArr.filter(e => e !== undefined)
}

module.exports = {
  transform
};
