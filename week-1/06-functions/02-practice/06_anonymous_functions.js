function sumOfSomething(a, b, fnToCall) {
  const val1 = fnToCall(a);
  const val2 = fnToCall(b);
  return val1 + val2;
}

// passing numbers and anonymous function as argument.
let ans = sumOfSomething(2, 2, function (a) {
  return a * a;
});

console.log(ans); // Output : 8
