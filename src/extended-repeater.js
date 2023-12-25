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
  const string = str === null ? 'null' : String(str);

  const additionString = options.addition === null ? 'null' : (options.addition !== undefined ? String(options.addition) : '');

  let sepAdditionEl = string + Array.from({ length: options.additionRepeatTimes || 1 }, () => additionString).join(options.additionSeparator || '|');
  let sepAll = Array.from({ length: options.repeatTimes || 1 }, () => sepAdditionEl).join(options.separator || '+');
  return sepAll;

}

const obj = {
  repeatTimes: 3,
  separator: '**',
  addition: 'PLUS',
  additionRepeatTimes: 3,
  additionSeparator: '00',
}

console.log(repeater('la', { repeatTimes: 3 }));

module.exports = {
  repeater
};
