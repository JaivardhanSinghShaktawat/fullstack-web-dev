// this line will run in call stack.
console.log("Hi there");

function calculateSum() {
  let a = 0;
  for (let i = 0; i < 10; i++) {
    a = a + 1;
  }
  console.log(a);
}

// this function will run in call stack.
calculateSum();

/*
Output: Hi there
10
*/
