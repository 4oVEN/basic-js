const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  if (matrix[0]==0) return 0
  let res= []
  output = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex])); 
  for (let i = 0; i < output.length; i++) {
    let step = output[i]
      for (let j = 0; j < step.length; j++) {
        if (step[j] == 0) break
        else res.push(step[j])        
      }
  }
  return  res.reduce((prev, cur)=> prev+cur)
}
module.exports = {
  getMatrixElementsSum
};
