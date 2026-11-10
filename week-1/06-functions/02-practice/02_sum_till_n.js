// declaring a function.
function calculateSum(n) {
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }

  return ans;
}

// calling the function.
let sum = calculateSum(100);
console.log(sum);
