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


const without = function(original, itemsToRemove) {
  result = []
  for (let i = 0; i < original.length; i++) {
    if (!itemsToRemove.includes(original[i])) {
      result.push(original[i]);
    }
  }
  return result
};


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));