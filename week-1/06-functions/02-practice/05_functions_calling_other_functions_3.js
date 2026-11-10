// function to find the square of a number.
function square(n) {
  return n * n;
}

// function to find the cube of a number.
function cube(n) {
  return n * n * n;
}

// function to find the sum of cube or square of the input.
function sumOfSomething(a, b, fnToCall) {
  const val1 = fnToCall(a);
  const val2 = fnToCall(b);
  return val1 + val2;
}

console.log(sumOfSomething(1, 2, square)); // Output : 5
console.log(sumOfSomething(1, 2, cube)); // Output : 9
