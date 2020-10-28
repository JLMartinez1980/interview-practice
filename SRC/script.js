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

  if (arr.length === 0) {
    return [];
  };

  arr.sort((a, b) => a.length - b.length);

  return JSON.stringify(arr, null, '\t');
}

//testing
assertLength = (actual, expected, mssg) => {
  const equalLength = actual.length === expected.length;

  let areEqual = true;

  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      areEqual = false;
      break;
    }
  }

  if (equalLength === areEqual) {
    console.log('passed');
  } else {
    console.log(`FAILED: ${mssg},[EXPECTED]: ${actual} the return ${expected}`)
  }
}

const outputThree = sortByLength(["apple", "pie", "shortcake"]);
console.log(outputThree);
const resultThree = ["pie", "apple", "shortcake"];
assertLength(outputThree, resultThree, `return an array with smallest word first then ascending`)
const outputFour = sortByLength([])
console.log(outputFour);
const resultFour = []
assertLength(outputFour, resultFour, `returns an empty array`)

console.log('____________________________________________');

/*
Create a function which returns the number of true values there are in an array.
*/

countTrue = (array) => {
  if (array.length === 0) {
    return 0;
  }
  const reduce = array.reduce( (prev, values) => {
    if (values === true) {
      prev++
    }
    return prev
  }, 0)
  return reduce;
}



const countTrueOutput = countTrue([true, false, false, true, false])
console.log('return', countTrueOutput);
const countTrueExpected =  2;
const countTrueOutputOne = countTrue([false, false, false, false])
const countTrueExpectedOne = 0


console.log('____________________________________________');

/*
Create a function that takes two strings as arguments and returns the number
of times the first string (the single character) is found in the second string.
*/

charCount = (myChar, str) => {
	const letters = str.split('');
  console.log('letters', letters);

  const findValue = letters.reduce( (prev, letter) => {
    if (myChar === letter) {
      prev++
    }
    return prev;
  }, 0)
  return findValue
}

const countingOutput = charCount("a", "edabit");
console.log('return', countingOutput)
const countingResult = 1;
const countingOutputOne = charCount("b", "big fat bubble")
const countingResultOne = 4

console.log('____________________________________________');

/*
Create a function that takes in an array of numbers and returns the sum of its cubes.

sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
*/

sumOfCubes = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
	const mapOver = nums.map( (num) => {
    return cubeNums = Math.pow(num, 3)
  })
  const reduce = mapOver.reduce( (prev, number) => {
    return prev + number;
  }, 0)
  return reduce;
}

const cubesOutput = sumOfCubes([1, 5, 9])
console.log('return', cubesOutput)
// ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
