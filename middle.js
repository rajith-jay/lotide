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


const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[Math.floor(arr.length/2)]]
  } else if (arr.length % 2 === 0) {
    return [arr[Math.floor(arr.length/2) - 1], arr(Math.floor(arr.length/2))]
  }
}

