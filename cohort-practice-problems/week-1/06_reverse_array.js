// Write a program that reverses all the elements of an array.

let arr = [1, 2, 3, 4, 5];

// reverse array logic.

let start = 0,
  end = arr.length - 1;

while (start < end) {
  arr[start] = arr[start] ^ arr[end];
  arr[end] = arr[end] ^ arr[start];
  arr[start] = arr[start] ^ arr[end];

  start++;
  end--;
}

console.log(`Reverse array is : [${arr}]`);
