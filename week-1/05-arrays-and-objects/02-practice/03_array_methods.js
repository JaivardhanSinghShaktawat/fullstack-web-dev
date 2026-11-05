/* Arrays

Array: push(), pop(), shift(), unshift(), splice(), slice(), concat(), forEach()
*/

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

let initialArray = [1, 2, 3, 4];
initialArray.push(5);

console.log(initialArray);
// Output : [ 1, 2, 3, 4, 5 ]

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

initialArray = [1, 2, 3, 4];
initialArray.pop();

console.log(initialArray);
// Output : [1,2,3]

// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

initialArray = [1, 2, 3, 4];
initialArray.shift();

console.log(initialArray);
// Output : [2,3,4]

// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

initialArray = [1, 2, 3, 4];
initialArray.unshift(0);

console.log(initialArray);
// Output : [0,1,2,3,4]

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

initialArray = [1, 2, 3, 4];
let secondArray = [5, 6, 7, 8, 9, 10];
const finalArray = initialArray.concat(secondArray);

console.log(finalArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach()

// Trivial way of traversing the array.
initialArray = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < initialArray.length; i++) {
  console.log(initialArray[i]);
}

// forEach()

// Example 1
initialArray = [1, 2, 3];

function logSomething(str) {
  console.log(str + " is the string");
}

initialArray.forEach(logSomething);

// Example 2
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function (item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

// Example 3
initialArray = [1, 2, 3];

function logThing(elem) {
  console.log(elem + " is the string");
}

initialArray.forEach(logThing);
