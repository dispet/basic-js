const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let str = '';
  if (!Array.isArray(members) )return false;
  members.map( function(v){ if(typeof v ==='string') str += v.trim()[0].toUpperCase()} );
  return  str.split('').sort().join('');
};
