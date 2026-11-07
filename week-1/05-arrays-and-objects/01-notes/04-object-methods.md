# Object Methods

## Object Methods

- Object is a global class that provides some static methods.

1. Object.keys(): it returns an array containing the keys of the object.

2. Object.values(): it returns an array containing the values of the object.

3. Object.entries(): it returns a 2D array.Each element is an array.

4. objectName.hasOwnProperty(): it checks whether a property belongs to an object or not.

5. Object.assign({},obj1,obj2,objn): it combines two or more objects and creates a new object.

6. Object.keys().length: it returns the length of keys present in the array.

```js
// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);

// More Examples

const myObj = {
  firstName: "hello",
  lastName: "world",
  age: 24,
};

const newObj = Object.assign({}, myObj, { fullName: "coding is fun" });
console.log(newObj);
/*
{
  firstName: 'hello',
  lastName: 'world',
  age: 24,
  fullName: 'coding is fun'
}
*/

console.log(newObj.hasOwnProperty("firstName")); // Output : true
```
