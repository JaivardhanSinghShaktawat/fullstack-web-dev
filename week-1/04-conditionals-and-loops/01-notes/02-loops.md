# Loops

## What are Loops ?

- Loops are used to run some logic again and again multiple times.

- Loops avoid the repetition of code lines.

## for loop

1. for loop

```
for(initialization; condition ; updation) {
    // code block
}
```

- for the first time , initialization happens and after that condition checked and if the condition evaluates to true than the block is executed.After that updation happens, and condition checked.If condition evaluates to true than block is executed otherwise the for loop stops.

- The initialization happens only once and after that condition checking , block execution and updation happens continously until the condition is true.

```js
// Sum of first 6 numbers.
let answer = 1 + 2 + 3 + 4 + 5 + 6;
console.log(answer);

// sum of first 1000 numbers.
// we will use to calculate the sum of 1000 numbers.

answer = 0;
for (let i = 1; i <= 100; i++) {
  answer += i;
}

console.log(answer); // Output : 5050
```
