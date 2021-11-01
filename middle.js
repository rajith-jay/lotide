const assertArraysEqual = require('./assertArraysEqual');


const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[Math.floor(arr.length / 2)]];
  } else if (arr.length % 2 === 0) {
    return [arr[Math.floor(arr.length / 2) - 1], arr(Math.floor(arr.length / 2))];
  }
};

module.exports = (middle);