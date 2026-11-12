function customAsyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("hi there");
  });

  return p;
}

async function main() {
  let value = customAsyncFunction();
  console.log(value); // Output: Promise { 'hi there' }
}

main();
