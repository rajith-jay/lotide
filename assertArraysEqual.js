const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return `✅✅✅ Assertion passed. The first array === the second array.`;
  } else {
    return `❌❌❌ Assertion failed. The first array !== the second array.`;
  }
};

module.exports = assertArraysEqual;