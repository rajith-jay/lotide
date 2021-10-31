const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
    
  } else  {
    console.log(`Assertion failed: ${actual} !== ${expected}`)
  }

};

const countLetters = function (string) {
  const numOfLetters = {};
  const newString = string.splice(" ").join("");

  for (const letter of newString) {
    if (numOfLetters[letter]) {
      numOfLetters[letter] += 1
    } else {
      numOfLetters[letter] = 1
    }
  }
  return numOfLetters
}





