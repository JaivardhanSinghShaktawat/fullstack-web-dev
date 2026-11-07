# JSON

## What is JSON ?

- It stands for JavaScript Object Notation.

- It is a string only.

- We stringify the data before sending the data to the server.

- JSON is a class that gives two high level static methods.

- It is very lightweight format that is used to share data over the network.

## JSON Methods

1. JSON.stringify(): it converts the object into JSON.

2. JSON.parse(): it converts the JSON data into object.

```js
const users = {
  name: "hello",
  age: 24,
  gender: "male",
};

console.log(users["name"]);

// converting object into json format.
let jsonData = JSON.stringify(users);
console.log(jsonData); // this jsonData is a string.
// Output : {"name":"hello","age":24,"gender":"male"}

// converting/parsing json data into object.
const parseData = JSON.parse(jsonData);
console.log(parseData); // this parseData is an object.
// Output : { name: 'hello', age: 24, gender: 'male' }

// parsing the JSON data into an object.
console.log(JSON.parse(`{"firstName": "hello", "lastName": "world"}`));
// Output : { firstName: 'hello', lastName: 'world' }

// More examples
function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

// this is JSON or string.

const user = '{"name": "hello world", "age": 24, "gender": "male"}';

console.log(user[0]); // Output: {

const obj = JSON.parse(user);
console.log(obj["gender"]); // Output: male

jsonData = JSON.stringify(obj);
console.log(jsonData);
// Output: {"name":"hello world","age":24,"gender":"male"}
```
