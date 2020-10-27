const CustomError = require("../extensions/custom-error");

module.exports = function getSeason (date) {
  if (!date) return 'Unable to determine the time of year!';
  if (isNaN(date.valueOf()) && !(date instanceof Date)) throw new Error('THROWN');
  let seasons = [ 'winter', 'winter','spring', 'spring', 'spring', 'summer', 'summer','summer','autumn', 'autumn', 'autumn', 'winter'];
  return seasons[(new Date(date)).getMonth()];
};
