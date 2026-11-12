// Creating a promise object.
let p = new Promise(); // creating an instance of the Promise class.
console.log(p); // Output: error will come.

// correct way to create a promise object.
let p1 = new Promise(function (resolve) {});

console.log(p1); // Output: Promise { <Pending> }
