# Callbacks Bounty

## Explain why this logging sum() returns undefined ?

```js
function sum(num1, num2, fnToPass) {
  let result = num1 + num2;
  // return result ;
  fnToPass(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

console.log(sum(2, 4, displayResult));

/*
Result of the sum is : 6
undefined 
*/
```

**Answer :** We are getting undefined because the sum function called is returning nothing.So, by default it returns undefined that is logged by the console.log() function.
