# Variables

## What are Variables ?

- Variables are used to store data.
- It's value can change throughout the program.
- let,const and var keyword are used to define variables.

1. let : it is used to define variable whose value can change throughout the program.

- it is block scope.

2. const : it is used to define variable whose value cannot be changed throughout the program.

- it is block scope.

3. var : it is used to define variable whose value can change throughout the program.

- it is function scope.

**Note :** Always use let and const keyword and avoid var keyword to define variables.

**Note :** console.log() is a method that is used to log something in the standard output.

```js
// Variable Examples

// 1. var example
var a = 1; // defining the variable a.
console.log(a); // Output : 1
a = 2;
console.log(a); // Output : 2

// 2. let example
let b = 1; // defining the variable b.
console.log(b); // Output : 1
b = 2;
console.log(b); // Output : 2
console.log("Hello World"); // Output : Hello World

// 3. const example
const c = 1;
// c = 2 ;  error will come here.
console.log(a);
```
