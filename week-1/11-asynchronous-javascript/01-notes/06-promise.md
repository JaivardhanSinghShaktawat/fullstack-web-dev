# Promises

## What are Promises ?

- Promises are syntactical sugar that make this code slightly more readable.

- Under the promises uses call stack, event loop, web api's and callback queue.

- Promises were introduced to get rid of callbacks.

- Callbacks are an ugly way of writing asynchronous code.

- The promise object is returned immediately but the promise may or may not resolve.

- Here, the customReadFileFunction() returns a promise object.Once the promise is resolved than we will get the data.

- It is just a class that makes callbacks and async functions slightly more readable.

- When we create a promise, we need to pass in a function as the first argument which has resolve as the first argument.

- A promise has three states:

1. pending: it means promise is not resolved yet.
2. resolve: it means the promise is resolved.
3. reject: it means the promise is rejected.

## Example: Read a file from the file system using promises.

```js
const fs = require("fs");

function customReadFileFunction() {
  console.log("Inside customReadFileFunction()");
  let p = new Promise(function (resolve) {
    console.log("Inside promise");
    fs.readFile("a.txt", "utf-8", (err, data) => {
      console.log("before resolve");
      resolve(data); // resolve this data or promise.
    });
  });

  // returning a promise
  return p;
}

function onDone(data) {
  console.log(data);
}

// once the promise is resolved than the then() will call the onDone function.
let result = customReadFileFunction();
console.log(result);
result.then(onDone);

/*
Inside customReadFileFunction()
Inside promise
Promise { <pending> }
before resolve
hi there from a.txt
*/
```

## Example 1

```js
// Creating a promise object.
let p = new Promise(); // creating an instance of the Promise class.
console.log(p); // Output: error will come.

// correct way to create a promise object.
let p1 = new Promise(function (resolve) {});

console.log(p1); // Output: Promise { <Pending> }
```

## Example 2

```js
// Creating an instance of the Promise class.
let d = new Promise(function (resolve) {
  resolve();
});

function callback() {
  console.log(d); // logging the promise
  // Output: Promise { <undefined> }
}

// Whenever d promise resolves than call the callback function.
d.then(callback);
```

## Example 3

```js
// creating a promise that immediately resolves.
let d = new Promise(function (resolve) {
  resolve("Hello World");
});

console.log(d); // Output: Promise { 'Hello World' }

d.then(printName);

function printName(data) {
  console.log(data); // Output: Hello World
  console.log(d); // Output: Promise { <Hello World>}
}
```

## Example 4

```js
// defining a promise.
let d = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Hello World");
  }, 1000);
});

// we access the resolved data using then().
function callback(data) {
  console.log(data); // Output: 'Hello World'
  console.log(d); // Output: Promise { 'Hello World' }
}

console.log(d); // Output: Promise { <Pending> }

d.then(callback);

/*
Output: Promise { <Pending>}
Hello World
Promise { 'Hello World' }
*/
```

## Example 5

```js
// Here is a simple promise that immediately resolves.
let p = new Promise(function (resolve) {
  /*
  Place for the writer of the async function to do their magic (get ketchup) and 
  call resolve at the end with the data.
  */
  resolve("hi there"); // here the promise resolves immediately.
  // .then() get's called whenever the async function resolves.
});

p.then(function () {
  console.log(p);
  // Output: Promise { 'hi there' }
});
```

## Example 6

```js
// Dummy async function that almost immediately resolves.
function customAsyncFunction() {
  return new Promise(function (resolve) {
    resolve("hi there");
  });
}

let res = customAsyncFunction();

res.then(function (data) {
  console.log(data); // Output: hi there
});
```
