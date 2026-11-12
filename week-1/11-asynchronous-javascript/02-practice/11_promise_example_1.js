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
