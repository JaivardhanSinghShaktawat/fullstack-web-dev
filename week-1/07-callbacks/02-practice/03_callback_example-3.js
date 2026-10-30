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
