// finds the square of the input
function square(n) {
  return n * n;
}

// finds the cube of the input.
function cube(n) {
  return n * n * n;
}

// finds the sum of the squares of the inputs
function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

// finds the sum of the cube of the inputs.
function sumOfCubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);
  return val1 + val2;
}

console.log(sumOfSquares(1, 2)); // Output: 5
console.log(sumOfCubes(1, 2)); // Output: 9
