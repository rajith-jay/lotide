const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let result = arr.slice(0);
  return result;
};

module.exports = tail;
