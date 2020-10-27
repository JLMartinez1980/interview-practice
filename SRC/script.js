/*
Given an array of boxes, create a function that returns the total volume of
all those boxes combined together. A box is represented by an array with three elements:
length, width and height.

For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1])
should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

*/


totalVolume = (...boxes) => {
  let sumOf = 0;
  boxes.filter( (arr) => {
    const multiply = arr.reduce( (prev, num) => {
      return prev * num
    }, 1)
    sumOf += multiply
  })
  return sumOf;
};

assert = (actual, expected, mssg) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED: ${mssg}, the return ${expected}`)
  }
}
const output = totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
console.log(output);
const result = 63

assert(output, result, 'Answer => 63')


console.log('____________________________________________');

/*
Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.

Try completing this challenge without using any:

Conditionals
Ternary operators
Negations
Bit operators
*/

flip = (y) => {
	return Math.abs(!y)
};

assert = (actual, expected, mssg) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED: ${mssg},[EXPECTED]: ${actual} the return ${expected}`)
  }
}
const outputOne = flip(1);
console.log(outputOne);
const resultOne = 0;

const outputTwo = flip(0);
console.log(outputTwo);
const resultTwo = 1

assert(outputOne, resultOne, `return opposite of input`);
assert(outputTwo, resultTwo, `return opposite of input`);

console.log('____________________________________________');

/*
Create a function that returns an array of strings sorted by length in ascending order.

Strings will have unique lengths, so don't worry about comparing two strings with identical length.
Return an empty array if the input array is empty (see example #4).
*/

sortByLength = (arr) => {
  arr.sort((a, b) => a.length - b.length);

  return JSON.stringify(arr, null, '\t');
}


const outputThree = sortByLength(["apple", "pie", "shortcake"]);
console.log(outputThree);
const resultThree = ["pie", "apple", "shortcake"];

const outputFour = sortByLength([])
console.log(outputFour);
const resultFour = []
