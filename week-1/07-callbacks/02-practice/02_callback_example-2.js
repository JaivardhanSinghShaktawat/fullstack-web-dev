/* Create a program where you can call displayResult or displayResultPassive function
by calling only a single function.You are not allowed to change the code of displayResult 
or displayResultPassive.
*/

function sum(num1, num2, callFn) {
  let result = num1 + num2;
  callFn(result); // this fn can be either displayResult() or dispalyResultPassive().
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// passing function as argument.
sum(2, 2, displayResult); // Output : Result of the sum is : 4
sum(2, 2, displayResultPassive); // Output : Sum's result is : 4
