// Write a program to print the biggest number in an array.

const arr = [21, 121, 2343, 232, 1121, 565, 34, 6, 3, 3, 535, 3343];
// const arr = [];

let biggestNumber = null;

if (arr.length) {
  biggestNumber = arr.at(0);
}

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > biggestNumber) {
    biggestNumber = arr[i];
  }
}

// handling edge cases.
if (biggestNumber !== null) {
  console.log(`Biggest number in the given array is : ${biggestNumber}`);
  // Output : Biggest number in the given array is : 3343
} else {
  console.log("The given array is empty array");
}
