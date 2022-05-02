const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
   
  if (date == undefined) return 'Unable to determine the time of year!'
  if (date.toString !== Date.prototype.toString) throw new Error("Invalid date!")

 let season = {
   'winter': ['Dec', 'Jan', 'Feb'],
   'spring': ['Mar', 'Apr', 'May'],
   'summer': ['Jun', 'Jul', 'Aug'],
   'autumn': ['Sep', 'Oct', 'Nov']
 }

 let dateArr = date.toString().split(' ')
 for (let key in season) {
   if (season[key].includes(dateArr[1])) return key
 }
 throw new Error("Invalid date!") 

}

module.exports = {
  getSeason
};
