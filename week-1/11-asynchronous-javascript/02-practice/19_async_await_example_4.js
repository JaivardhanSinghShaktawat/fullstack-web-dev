function customAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 2000);
  });

  return p;
}

async function main() {
  // no callbacks, no .then syntax
  /*
  customAsyncFunction().then(function(value){
    console.log(value);
  })
  */
  let value = await customAsyncFunction();
  console.log("hi there1");
  console.log(value); // Output: hi there
}

main();
console.log("after main");

/*
Output: after main
hi there1 
hi there
*/
