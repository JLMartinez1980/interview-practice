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

console.log('____________________________________________');

/*
Create a function that takes an array of students and returns an array of
their top notes. If the student does not have notes then let's assume their
top note is equal to 0.
*/

getStudentTopNotes = (students) => {
	const topNotes = [];

  const filteredGrades = students.map( (student) => {
    const studentNotes = student.notes;
    return studentNotes.sort().pop();
  })
  return filteredGrades;
};

const studentOutput = getStudentTopNotes([
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
]);

/*
Given an object of people and their ages, return how old the people would be
after n years have passed. Use the absolute value of n.
*/

afterNYears = (names, n) => {
	for (let key in names) {
    names[key] = Math.abs(names[key] + n)
  }
  return names;
}

const afterYearsOutput = afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1)
console.log(afterYearsOutput);
// ➞ {
//   "Joel" : 33,
//   "Fred" : 45,
//   "Reginald" : 66,
//   "Susan" : 34,
//   "Julian" : 14
// }



/*
Write a function that takes a two-digit number and determines if it's the
largest of two possible digit swaps.  If 27 is our input, we should return
false because swapping the digits gives us 72, and 72 > 27. On the other hand,
swapping 43 gives us 34, and 43 > 34.
*/

largestSwap = (num) => {
	let stringNum = JSON.stringify(num);

  let splitNum = stringNum.split('');
  splitNum = splitNum.reverse().join('');

  const numbers = Number(splitNum);

  if (numbers > num) {
    return false;
  } else {
    return true;
  }
};

const outputLargestSwap = largestSwap(53)
console.log(outputLargestSwap);
// ➞ true


/*
Create a function that finds the word "bomb" in the given string. If found,
return "Duck!!!", otherwise return "There is no bomb, relax.".
*/

function bomb(str) {
  str = str.toLowerCase();

	if (str.indexOf('bomb') > -1) {
    return `Duck!!!`
  } else {
    return `There is no bomb, relax.`
  }
}

const bombOne = bomb("Hey, did you think there is a bomb?")
console.log(bombOne);
// ➞ "Duck!!!"
const bombTwo = bomb("This goes boom!!!");
console.log(bombTwo);
// ➞ "There is no bomb, relax."

/*
Create a function that takes a string and returns
the number (count) of vowels contained within it
*/

countVowels = (str) => {
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const letters = str.split('');

  const mappedLetters = letters.map( (letter) => {
    const mappedVowels = vowels.map( (vowel) => {
      if (letter === vowel) {
        counter++
      }
    })
  })
  return counter
}
const vowelsOutput = countVowels("Prediction")
//➞ 5
console.log(vowelsOutput);

console.log('__________________October 30 ^__________________________');

/*
Create a function which returns the number of true values there are in an array.
*/

countTrue = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  let counter = 0;
  for (let value of arr) {
    if (value === true) {
      counter++
    }
  }
  return counter;
}

const trueOutput = countTrue([true, false, false, true, false]);
console.log(trueOutput);

/*
Return the sum of all items in an array, where each item is multiplied by
its index (zero-based). For empty arrays, return 0.
*/

indexMultiplier = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const multiplier = arr.reduce(  (runningTotal, currentValue, index) => {
    return runningTotal + (currentValue * index);
  }, 0);
  return multiplier;
}

const indexOutput = indexMultiplier([1, 2, 3, 4, 5]);
console.log('indexOutput', indexOutput);
const indexOfOne = indexMultiplier([-3, 0, 8, -6]);
console.log('indexOfOne', indexOfOne);
console.log('_______________________Nov 2 ^ ____________________')
/*
Total Volume of All Boxes
Given an array of boxes, create a function that returns the total volume of all
those boxes combined together. A box is represented by an array with three elements:
length, width and height.

For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1])
should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.
*/
totalVolume = (...boxes) => {
  const findVolume = boxes.map( (box) => {
    return box.reduce( (runningTotal, currentValue) => {
      return runningTotal * currentValue
    }, 1);
  })

  const findSum = findVolume.reduce( (runningValue, currentTotal) => {
    return runningValue + currentTotal
  }, 0);
  return findSum;
};


const volumeOutput = totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
console.log('volumeOutput', volumeOutput);

console.log('___________________________________________')

/*
Write a function that creates an object with each (key, value) pair being the
(lower case, upper case) versions of a letter, respectively.
*/
mapping = (letters) => {
  const letterObj = {};
  const changeCase = letters.map( (letter) => {
    const lowerCase = letter;
    const upperCase = letter.toUpperCase();
    letterObj[lowerCase] = upperCase
  })
  return letterObj
}
const mappingOutput = mapping(["p", "s"]);
console.log('map-return', mappingOutput);
console.log('___________________________________________')


/*
Shopping for Memorial Day!
Create a function that will take in an array of objects and calculate the
total based on the quantity of items purchased. Apply a 6% sales tax for
each item when appropriate.
*/
const tax = .06

function checkout(cart) {
  const findItems = cart.map( (item) => {
    return item.qty * item.prc
  });

  const addTogether = findItems.reduce( (runningTotal, totalCost) => {
    return runningTotal + totalCost
  }, 0);



  let taxable = 0

  const findTax = cart.map( (taxableItems) => {
    if (taxableItems.taxable) {
      console.log('taxableItems', taxableItems);
      taxable += (taxableItems.prc * taxableItems.qty) * tax
      console.log('taxable', taxable)
    }
  });

  return addTogether + taxable;
}


const memorialOutput = checkout([
		{ desc: "grill", prc: 300, qty: 1, taxable: true },
		{ desc: "hotdogs", prc: 10, qty: 2, taxable: false },
		{ desc: "US Flag", prc: 30, qty: 1, taxable: true }
	]);

console.log(memorialOutput);

console.log('_______________________Nov 3 ^ ____________________')

/*
Write a function that has two parameters: orders and cost.
Return any orders that are greater than the cost.
*/

expensiveOrders = (orders, cost) => {
	const lowerCostObj = {};

  for (let price in orders) {
    if (cost < orders[price]) {
      lowerCostObj[price] = orders[price]
    }
  }
  return lowerCostObj;
}

const expensiveOutput = expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)

console.log('expense', expensiveOutput);
console.log('___________________________________________');

/*
Create a recursive function that takes two parameters and repeats the string n
number of times. The first parameter txt is the string to be repeated and the
second parameter is the number of times the string is to be repeated.

String.prototype.repeat() is not allowed
*/
repetition = ( txt, n) => {
  if (n < 0) {
    return '';
  }

  if (n === 1) {
    return txt
  } else {
    return txt + repetition(txt, n-1)
  }
}
const recursionOutput = repetition("ab", 3);

console.log('recursive', recursionOutput);
// ➞ "ababab"

console.log('___________________________________________');

/*
Take an array of integers (positive or negative or both) and return
the sum of the absolute value of each element.
*/
function getAbsSum(arr) {
	const absSum = arr.reduce( (acc, sum) => {
    sum = Math.abs(sum)
    return acc + sum;
  }, 0)
  return absSum;
};

const absoluteOutput = getAbsSum([2, -1, 4, 8, 10]);
console.log('absolute', absoluteOutput);
// ➞ 25
console.log('_______________________Nov 4 ^ ____________________');


/*
Given a number n, write a function that returns PI to n decimal places.
n will not be above 15, to keep this challenge simple.
Round up the last digit if the next digit in PI is greater or equal to 5 (see second example above).
The return value must be a number, not a string.

myPi(5) ➞ 3.14159

myPi(4) ➞ 3.1416
myPi(3) -> 3.142
myPi(15) ➞ 3.141592653589793





function roundPrice(rnum, rlength) {
    var newnumber = Math.ceil(rnum * Math.pow(10, rlength-1)) / Math.pow(10, rlength-1);
    var toTenths = newnumber.toFixed(rlength);
    return toTenths;
}

alert(roundPrice(678.91011,2)); // returns 679.00
alert(roundPrice(876.54321,2)); // returns 876.60
*/

function myPi(n) {
  let precision = Math.pow(10, n);
	let currentPi = Math.PI.toFixed(n);

  return currentPi
}



console.log(myPi(1));

console.log('___________________________________________');

/*
Create a function that splits a string into an array of identical clusters.

Each cluster should only have one unique character.
The resulting array should be in the same order as the input string.
Should work with letters, numbers and other characters.
*/

splitGroups = (str) => {
  return str.match(/(.)\1*/g);
}

const splitGroupsOutput = splitGroups("aaabbbaabbab")
console.log(splitGroupsOutput);
// ➞ ["aaa", "bbb", "aa", "bb", "a", "b"]

console.log('___________________________________________');

/*
Create a function that takes an integer and returns the factorial
of that integer. That is, the integer multiplied by all positive lower integers.
*/
factorial = (int) => {
  //IF number is negative, reject it
  if ( int < 0) {
    return -1;
  } else if (int === 1) {
    return 1;
  } else {
    return (int * factorial(int-1));
  }

  //else && else if else if num === 0 return 1 ||
    //num * recursive call with argument (num-1);
}
const factorialOutput = factorial(5)
console.log('factorialOutput', factorialOutput);
// ➞ 120

console.log('___________________________________________');
/*
Create a function that returns an array of strings sorted by length in ascending order.
Strings will have unique lengths, so don't worry about comparing two strings with identical length.
Return an empty array if the input array is empty (see example #4).
*/

sortByLength = (arr) => {
  return arr.sort( (a, b) => a.length - b.length);
}
const sortByLengthOutput = sortByLength(["apple", "pie", "shortcake"])
console.log(sortByLengthOutput);
 // ➞ ["pie", "apple", "shortcake"]

 console.log('_______________________Nov 5-10 ^ ____________________')
