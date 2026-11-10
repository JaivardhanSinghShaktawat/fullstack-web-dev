# Functions Calling Other Functions

## Example 1

- Here, the sumOfSquares() is calling the square() function.

```js
// finds the square of the input
function square(n) {
  return n * n;
}

// finds the sum of the squares of the inputs
function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

console.log(sumOfSquares(1, 2)); // Output : 5
```

## Example 2

- Here, the logic is repeating again and again.It violates the DRY principle.

- We can solve this problem by using callbacks.

```js
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
```

## Example 3

- Solving the above problem by using callbacks.

```js
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
```
