// creating a promise that immediately resolves.
let d = new Promise(function (resolve) {
  resolve("Hello World");
});

console.log(d); // Output: Promise { 'Hello World' }

d.then(printName);

function printName(data) {
  console.log(data); // Output: Hello World
  console.log(d); // Output: Promise { <Hello World>}
}
