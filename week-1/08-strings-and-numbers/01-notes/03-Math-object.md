# Math Object

## What is Math ?

- it is a global object that provides methods to do math operations.

## Math class methods

1. sqrt(): it returns the square root of a number.

2. min(): it returns the minimum number.

3. max(): it returns the maximum number.

4. pow(): it returns a^b

5. random(): it returns a random value between 0 and 1.

6. floor(): it rounds down the value.It returns the floor of a number.

7. ceil(): it round up the value.It returns the ceil of a number.

8. round(): it rounds the value (floor or ceil)

## Math Object Examples

```js
function mathMethods(value) {
  console.log("Original Value:", value);

  let rounded = Math.round(value);
  console.log("After round():", rounded);

  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  let randomValue = Math.random();
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);

console.log(Math.random()); // returns a random number between 0 and 1.

console.log(Math.ceil(2.3)); // Output : 3
console.log(Math.floor(2.3)); // Output : 2
```
