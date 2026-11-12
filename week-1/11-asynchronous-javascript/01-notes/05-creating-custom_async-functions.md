# Creating Custom Async Functions

## How can we create an asynchronous function of our own ?

1. ugly way: by wrapping the asynchronous function inside a function and passing the callback.

- It is just a wrapper on top of another async function, which is fine.

- Usually all async functions you will write will be on top of JavaScript provided async functions like setTimeout() or fs.readFile().

```js
// this is just a wrapper on top of async function.
const fs = require("fs");

function customReadFileFunction(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data);
}

customReadFileFunction(onDone);
```

2. Promises: second way is to use promises instead of using callbacks.
