// Objects
const user1 = {
  firstName: "hello",
  gender: "male",
};

// accessing properties of objects.
console.log(user1.male); // Output : male

console.log(user1["first" + "Name"]); // Output : hello

user1.age = 200; // changing the value
user1.lastName = "world"; // adding a new property.

console.log(user1);
// Output :  { firstName: 'hello', male: 'male', age: 200, lastName: 'world' }

// Array of Objects : it is used a lot in JavaScript.

const users = [
  {
    firstName: "hello",
    male: "male",
  },
  {
    firstName: "world",
    male: "male",
    metadata: {
      address: {
        houseNumber: "",
        street: "",
      },
    },
  },
];

console.log(users);

const userName = "firstName";
console.log(users[0][userName]); // Output : hello
console.log(users[0]["metadata"]["address"]["house" + "Number"]);
// Output : empty string.
