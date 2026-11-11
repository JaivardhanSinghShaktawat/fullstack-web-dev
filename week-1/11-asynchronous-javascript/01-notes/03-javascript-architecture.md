# JavaScript Architecture

## How asynchronous programming is done in JavaScript ?

- there are five things in the javascript architecture:

1. call stack
2. event loop
3. web api's
4. callback queue

## Example 1

```js
// this line will run in call stack.
console.log("Hi there");

function calculateSum() {
  let a = 0;
  for (let i = 0; i < 10; i++) {
    a = a + 1;
  }
  console.log(a);
}

// this function will run in call stack.
calculateSum();

/*
Output: Hi there
10
*/
```

## Example 2

- Web api's are not part of JavaScript.They are part of browser.

- Ex: setTimeout(), setInterval() are Web API's.

```js
// this line will run in call stack.
console.log("hi there");

// this line will run in call stack
setTimeout(function () {
  console.log("from inside async function");
}, 5000);

// this line will run in call stack
let a = 0;

// this line will run in call stack
for (let i = 0; i < 10; i++) {
  a = a + 1;
}

// this line will run in call stack
console.log(a);

/*
Output: hi there
10
from inside async function
*/
```

## Example 3

```js
// this line will run in call stack.
console.log("hi there");

// this line will run in call stack
setTimeout(function () {
  console.log("from inside async function 1");
}, 20000);

// this line will run in call stack
setTimeout(function () {
  console.log("from inside async function 2");
}, 10000);

// this line will run in call stack
let a = 0;

// this line will run in call stack
for (let i = 0; i < 10; i++) {
  a = a + 1;
}

// this line will run in call stack
console.log(a);

/*
Output: hi there
10
from inside async function 2
from inside async function 1
*/
```
