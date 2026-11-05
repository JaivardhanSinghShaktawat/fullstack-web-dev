# Classes

## What is a Class ?

- Class is the blueprint of an object.
- The blueprint has two things i.e attributes and functions.
- Class is used to create objects.

```js
// Defining a class
class Animal {
  // constructor() function.
  constructor(name, legCount, speaks) {
    this.name = name; // defining the attributes and assigning some value.
    this.legCount = legCount;
    this.speaks = speaks;
  }

  // methods
  describe() {
    return this.name + " " + "has" + " " + this.legCount + " " + "legs";
  }

  // speak() function that logs speak.
  speak() {
    console.log("hi there " + this.speaks);
  }
}

let dog = new Animal("dog", 4, "bhow bhow"); // creating an object of Animal class.
let cat = new Animal("cat", 4, "meow");

dog.speak(); // Output: hi there bhow bhow
console.log(dog.describe()); // Output: dog has 4 legs
```
