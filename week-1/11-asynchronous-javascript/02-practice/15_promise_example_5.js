// Dummy async function that almost immediately resolves.
function customAsyncFunction() {
  return new Promise(function (resolve) {
    resolve("hi there");
  });
}

let res = customAsyncFunction();

res.then(function (data) {
  console.log(data); // Output: hi there
});
