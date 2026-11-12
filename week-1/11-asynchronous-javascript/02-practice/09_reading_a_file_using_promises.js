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
