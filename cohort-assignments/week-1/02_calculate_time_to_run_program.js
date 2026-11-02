/* Calculate the time it takes between a setTimeout call and the inner callback 
function actually running.
*/

let startTime = Date.now();

setTimeout(() => {
  console.log("Hello World");
  let endTime = Date.now();

  console.log(
    `The time it takes between a setTimeout() call and the inner callback function to run : ${(endTime - startTime) / 1000}s`,
  );
}, 1 * 1000);
