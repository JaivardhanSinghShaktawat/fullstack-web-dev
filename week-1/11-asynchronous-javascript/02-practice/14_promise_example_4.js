// Here is a simple promise that immediately resolves.
let p = new Promise(function (resolve) {
  /*
  Place for the writer of the async function to do their magic (get ketchup) and 
  call resolve at the end with the data.
  */
  resolve("hi there"); // here the promise resolves immediately.
  // .then() get's called whenever the async function resolves.
});

p.then(function () {
  console.log(p);
  // Output: Promise { 'hi there' }
});
