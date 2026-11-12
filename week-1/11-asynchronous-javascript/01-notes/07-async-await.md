# Async Await

## What is async await ?

- Async await are just syntactical sugar.Still uses callbacks and promises under the hood.

- Async await makes code much more readable than callbacks/promises

- They are usually used on the other caller side, not on the side where you define an async function.

- Any function that wants to use await, needs to be async.

- Rather than using the .then() syntax, we add await before and get the final value in the variable.

- async means asynchronous.It makes the function as asynchronous.

## Promises with then() Syntax.

```js
function customAsyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("hi there");
  });

  return p;
}

function main() {
  customAsyncFunction().then(function (value) {
    console.log(value);
  });
}

main();
```

## Where we can use await ?

- We can use await only inside the async function.

## Example 1

```js
function customAsyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("hi there");
  });

  return p;
}

async function main() {
  let value = customAsyncFunction();
  console.log(value); // Output: Promise { 'hi there' }
}

main();
```

## Example 2

```js
function customAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 2000);
  });

  return p;
}

async function main() {
  let value = customAsyncFunction();
  console.log(value); // Output: Promise { <pending> }
}

main();
```

## Example 3

```js
function customAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 2000);
  });

  return p;
}

async function main() {
  let value = await customAsyncFunction();
  // logging the resolved promise value.
  console.log(value); // Output: hi there
}

main();
```

## Example 4

```js
function customAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 2000);
  });

  return p;
}

async function main() {
  // no callbacks, no .then syntax
  /*
  customAsyncFunction().then(function(value){
    console.log(value);
  })
  */
  let value = await customAsyncFunction(); // waiting for the promise to get resolved.
  console.log("hi there1");
  console.log(value); // Output: hi there
}

main();
console.log("after main");

/*
Output: after main
hi there1 
hi there
*/
```
