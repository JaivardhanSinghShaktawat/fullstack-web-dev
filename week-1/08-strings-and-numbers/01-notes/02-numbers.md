# Numbers

## parseInt() and parseFloat()

- parseInt() and parseFloat() are global functions.

- parseInt(): it parse from a string into an integer.

- parseFloat(): it parse from a string into a floating point number.

```js
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = Number.parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42"); // Output : 42
explainParseInt("42px"); // Output : 42
explainParseInt("3.14"); // Output : 3
explainParseInt("sfdsfdsfsd3.14"); // Output : NaN

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = Number.parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14"); // Output : 3.14
explainParseFloat("42"); // Output : 42
explainParseFloat("42px"); // Output : 42

// More examples of parseInt() and parseFloat().
console.log(parseInt(42)); // Output : 42
console.log(parseInt("42")); // Output : 42
console.log(parseInt("40px")); // Output : 40
console.log(parseInt("px40px")); // Output : NaN

console.log(parseFloat(42)); // Output : 42
console.log(parseFloat("4.2")); // Output : 42
console.log(parseFloat("40px")); // Output : 40
console.log(parseFloat("px40px")); // Output : NaN
```
