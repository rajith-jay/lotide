const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true){
    return `✅✅✅ Assertion passed. The first array === the second array.`;
  } else {
    return `❌❌❌ Assertion failed. The first array !== the second array.`;
  }
};


const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);
