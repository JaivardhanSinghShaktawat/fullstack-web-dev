// this line will run in call stack.
console.log("hi there");

// this setTimeout() will run in web api.
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
