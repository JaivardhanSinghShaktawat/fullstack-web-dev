/* 
String Methods

String: length, indexOf(), lastIndexOf(), slice(), substr(), replace(), split(),
trim(), toUpperCase(), toLowerCase(), etc.
*/

let firstName = "hello world";

//  Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length: ", str.length);
}

getLength("Hello World");

console.log("Hello World".length); // Output: 11

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

console.log("Hello World World".indexOf("World")); // Output: 6

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");
console.log("Hello World World".lastIndexOf("World")); // Output: 12

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

console.log("hello world".slice(0, 5)); // Output : hello

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 2, 5);

console.log("Hello World".substr(2, 5)); // Output: llo W

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

console.log("Hello World".replace("World", "JavaScript"));
// Output : Hello JavaScript

console.log("hello world".replace("coding", "JavaScript"));
// Output : hello world

// split
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

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");
// Output : Hello World

value = "  coding is   fun   ";
console.log(value.trim()); // Output : coding is fun

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

value = "hello world";
console.log(value.toUpperCase()); // Output: HELLO WORLD

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");

value = "HELLO WORLD";
console.log(value.toLowerCase()); // Output: hello world
