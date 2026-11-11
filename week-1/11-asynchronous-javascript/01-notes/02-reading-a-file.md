# Reading a file from the file system

## readFile() function

- fs stands for file system.It is a built in core module in nodejs.

1. We use fs module of nodejs to work with file system.
2. readFileSync() reads the file synchronously from the file system
3. readFile() reads the file asynchronously from the file system.

- readFile(pathOfFile,encoding,callbackFn);

- encoding means how to read the file data.

- callback function accepts two arguments i.e error and data.

- readFile() runs in the nodejs background.Once it reads the file than it calls the
  callback function and pass the read data to it.The callback function is then
  executed.

```js
// Read from a file asynchronously.

// importing the built in fs module.
const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

// This code will run first.
console.log("hi there");
let a = 0;
// this line takes longer than the file read but still this code will run first.
for (let i = 0; i < 1000000000; i++) {
  a++;
}

// this code will run first than readFile().
console.log("hi there 2");

/*
Output: hi there
hi there 2 
hi there from the a.txt file
*/
```
