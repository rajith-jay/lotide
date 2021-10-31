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
  if (eqArrays(arr1, arr2) === true) {
    return `✅✅✅ Assertion passed. The first array === the second array.`;
  } else {
    return `❌❌❌ Assertion failed. The first array !== the second array.`;
  }
};



const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  // console.log(results); test to see what the array is
  return results;
};
  // logic to update results here


assertArraysEqual(letterPositions("hello").e, [1]);