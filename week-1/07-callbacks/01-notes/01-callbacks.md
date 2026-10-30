# Callbacks

## What are Callbacks ?

- Callbacks are function that are passed to another functions.

- Callbacks functions are called later on. It means call me later on.

- Callback means a function is going to callback a different function.

## Example 1

```js
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
```

## Example 2

```js
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
```

## Example 3

```js
// Function to calculate the arithmetic i.e sum and subtraction.
function calculateArithmetic(a, b, type) {
  if (type === "sum") {
    return a + b;
  }

  if (type === "minus") {
    return a - b;
  }
}

const value = calculateArithmetic(2, 2, "sum");
console.log(value); // Output : 4

/* You are not allowed to write the above logic of sum and minus inside the 
calculateArithmetic function. Customize the program.

Solution : we will define logic in different functions and call them inside the 
calculateArithmetic function.
*/
function calculateArithmeticSecond(a, b, type) {
  let val;
  if (type === "sum") {
    val = sum(a, b);
    return val;
  }
  if (type == "minus") {
    val = subtract(a, b);
    return val;
  }
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let result = calculateArithmeticSecond(2, 2, "sum");
console.log(result); // Output : 4

/* 3. Suppose you are not allowed to use this if else logic inside the calculateArithmeticSecond
function.How will you create this calculateArithmetic function ?

Solution : We will pass a function to the calculateArithmetic function. We will use
callbacks.
*/

function arithmeticFinalFunction(a, b, fnToCall) {
  const value = fnToCall(a, b);
  return value;
}

// passing sum as argument to the arithmeticFinalFunction.
result = arithmeticFinalFunction(2, 2, sum);
console.log(result); // Output : 4
```
