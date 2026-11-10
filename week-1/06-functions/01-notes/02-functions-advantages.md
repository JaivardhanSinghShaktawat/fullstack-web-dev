# Function Advantages

## Why we need functions ?

- reusability
- DRY principle
- function abstract our logic into the curly braces.

## Writing code by using functions and without functions

- Here we are using the same function with different input values and getting the different output.

```js
// declaring the function.
function findSum(n) {
  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}

// calling the function.
let ans = findSum(100);
console.log(ans);

// calling the function.
let ans2 = findSum(1000);
console.log(ans2);
```

- Here we are writing the same logic again and again and it violates the DRY principle.

```js
let n = 100;
let ans = 0;

for (let i = 1; i < n; i++) {
  ans = ans + i;
}
console.log(ans);

let n2 = 1000;
let ans2 = 0;

for (let i = 1; i < n; i++) {
  ans2 = ans2 + i;
}

console.log(ans2);
```
