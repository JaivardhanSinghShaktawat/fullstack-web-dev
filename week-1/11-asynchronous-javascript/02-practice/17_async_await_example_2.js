function customAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 2000);
  });

  return p;
}

async function main() {
  let value = customAsyncFunction();
  console.log(value); // Output: Promise { <pending> }
}

main();
