// setTimeout() is an asynchronous function.
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}
function findSumTill100() {
  console.log(findSum(100));
}

// calling an async function.
setTimeout(findSumTill100, 1000);
console.log("hello world");

/*
Output : hello world
4950
*/
