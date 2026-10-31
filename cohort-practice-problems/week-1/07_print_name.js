// Write a program that prints all the male people's first name given a complex object.

// Solving the above problem using arrays.
const personArray = ["hello", "world", "coding"];
const ageArray = [20, 21, 22];
const genderArray = ["male", "female", "male"];
const numberOfUsers = personArray.length;

for (let i = 0; i < numberOfUsers; i++) {
  if (genderArray[i] === "male") {
    console.log(personArray[i]);
  }
}

// Output : hello coding

// Solving the above problem using objects.
const users = [
  {
    firstName: "hello",
    age: 20,
    gender: "male",
  },
  {
    firstName: "world",
    age: 20,
    gender: "male",
  },
  {
    firstName: "priya",
    age: 22,
    gender: "female",
    metadata: {
      address: "",
    },
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].gender === "male") {
    console.log(users[i]["first" + "Name"]);
  }
}
