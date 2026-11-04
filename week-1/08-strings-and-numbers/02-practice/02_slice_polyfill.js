// Polyfill for slice function.

function cutIt(str, startIndex, endIndex) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < endIndex) {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(cutIt("hello world", 2, 5)); // Output: llo
