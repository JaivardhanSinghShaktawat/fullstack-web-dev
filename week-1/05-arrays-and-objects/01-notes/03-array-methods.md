# Arrays Methods

- Ex : push(), pop(), unshift() , shift(), forEach(), map(), filter(), reduce(), find() etc.

## Array Methods

1. push(): it pushes a new element from the end.

```js
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
```

2. pop(): it removes the last element.

```js
// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

let initialArray = [1, 2, 3, 4];
initialArray.pop();

console.log(initialArray);
// Output : [1,2,3]
```

3. shift(): it removes the first element of the array.

```js
// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

let initialArray = [1, 2, 3, 4];
initialArray.shift();

console.log(initialArray);
// Output : [2,3,4]
```

4. unshift(): it adds a new element to the array from the start.

```js
// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

let initialArray = [1, 2, 3, 4];
initialArray.unshift(0);

console.log(initialArray);
// Output : [0,1,2,3,4]
```

5. concat(): it combines two or more arrays into a single array.

```js
// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

let initialArray = [1, 2, 3, 4];
let secondArray = [5, 6, 7, 8, 9, 10];
const finalArray = initialArray.concat(secondArray);

console.log(finalArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

6. forEach(): it is used to iterate the array.

- forEach() calls the callback function for every element of the array.

```js
// forEach()

// Example 1
let initialArray = [1, 2, 3];

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
```
