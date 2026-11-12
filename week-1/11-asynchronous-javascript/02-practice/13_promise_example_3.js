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
