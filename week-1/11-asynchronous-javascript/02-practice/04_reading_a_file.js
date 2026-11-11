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
