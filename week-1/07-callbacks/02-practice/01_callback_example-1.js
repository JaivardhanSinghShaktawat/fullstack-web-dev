// First Way
// We want to print the sum result in active and passive format based on our choice.
// How can we do that.
function sum(num1, num2) {
  let result = num1 + num2;
  //   return result;
  displayResult(result);
  displayResultPassive(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are not allowed to call one function after this.How will you displayResult of
// a sum.

// First Way
const ans = sum(2, 2);
displayResult(ans);
