const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
    
  } else  {
    console.log(`Assertion passed: ${actual} !== ${expected}`)
  }

};

const head = function(arra) {
  
   return arra[0];
  }


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");