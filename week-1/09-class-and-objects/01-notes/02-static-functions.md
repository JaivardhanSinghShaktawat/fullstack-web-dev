# Static Functions

## What are Static Functions

- These functions are not associated with the objects.
- They are associated with the class.
- They can be called without instantiating the objects.

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

  static myType() {
    console.log("Animal");
  }
}

// Defining a class
class Alien {
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

  static myType() {
    console.log("Alien");
  }
}

Animal.myType(); // Output: Animal
Alien.myType(); // Output: Alien
```
