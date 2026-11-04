# Strings

## String Methods

- These methods are used to do string manipulation.

1. length: it returns the current length of the string.

```js
// str.length
//  Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length: ", str.length);
}

getLength("Hello World");

console.log("Hello World".length); // Output: 11
```

2. indexOf(): it returns the index of the matched substring else it returns -1.

```js
// str.indexOf(character/substring)
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

console.log("Hello World World".indexOf("World")); // Output: 6
```

3. lastIndexOf(): it returns the index of the matched substring from end else it returns -1.

```js
// str.lastIndexOf(character/substring)
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

console.log("Hello World World".lastIndexOf("World")); // Output: 12
```

4. slice(): it returns a slice of the string.

- The last index is not included here.

```js
// str.slice(startingIndex,endingIndex); // [)
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

console.log("hello world".slice(0, 5)); // Output : hello
```

```js
// slice function polyfill
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
```

5. substr(): it returns a substring but it is depreacted and not used.

```js
// substring(startingIndex,number of characters/length]
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 2, 5);

console.log("Hello World".substr(2, 5)); // Output: llo W
```

6. replace(): it replace the matched word with another word.

```js
// replace
// str.replace("what to replace","whom to replace")
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

console.log("Hello World".replace("World", "JavaScript"));
// Output : Hello JavaScript

console.log("hello world".replace("coding", "JavaScript"));
// Output : hello world
```

7. split(): it split the string into an array based on the delimeter.

```js
// split
// str.split(delimeter);
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

console.log("Hello World".split(""));
// Output : ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];

let value = "hello, my name is hello world";
// split the string into words based on the space delimeter.
const words = value.split(" ");
console.log(words);
// Output : [ 'hello,', 'my', 'name', 'is', 'hello', 'world' ]
```

8. trim(): it removes the space from the string.

```js
// str.trim()
// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");
// Output : Hello World

let value = "  coding is   fun   ";
console.log(value.trim()); // Output : coding is fun
```

9. toUpperCase() : it converts lowercase characters into uppercase.

```js
// str.toUpperCase()
// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

let value = "hello world";
console.log(value.toUpperCase()); // Output: HELLO WORLD
```

10. toLowerCase(): it converts uppercase characters into lowercase.

```js
str.toLowerCase();
// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");

let value = "HELLO WORLD";
console.log(value.toLowerCase()); // Output: hello world
```
