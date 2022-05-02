const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let addStr = "";
  let out = "";
  options.separator = options.separator ? options.separator : "+";
  options.additionRepeatTimes =
    options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  options.addition = options.addition === undefined ? "" : options.addition;
  options.additionSeparator =
    options.additionSeparator === undefined ? "|" : options.additionSeparator;
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addStr += `${options.addition}`;
    if (i + 1 !== options.additionRepeatTimes) {
      addStr += `${options.additionSeparator}`;
    }
  }
  let newStr = `${str}${addStr}`;
  if (options.repeatTimes === undefined) {
    return newStr;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    out += `${newStr}`;
    if (i + 1 !== options.repeatTimes) {
      out += `${options.separator}`;
    }
  }
  return out;
}

module.exports = {
  repeater
};
