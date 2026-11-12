function customAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 2000);
  });

  return p;
}

async function main() {
  let value = await customAsyncFunction();
  // logging the resolved promise value.
  console.log(value); // Output: hi there
}

main();
