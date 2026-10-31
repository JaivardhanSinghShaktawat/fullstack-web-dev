// Write a program that prints all the even numbers in an array.

const arr = [21, 22, 23, 24, 25];

// logic to print all the even numbers.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    // if arr[i] is divisble by 2, it returns 0 which means
    // even number.
    console.log(arr[i]);
  }
}
