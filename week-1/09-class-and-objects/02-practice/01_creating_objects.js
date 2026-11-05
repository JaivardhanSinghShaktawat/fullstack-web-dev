const dog = {
  name: "dog",
  legsCount: 4,
  speaks: "bhow bhow",
};

console.log(
  "animal " + dog.name + " " + dog.speaks + " with " + dog.legsCount + " legs",
);

// repetitive logic: defining the properties again and again.
const cat = {
  name: "cat",
  legsCount: 4,
  speaks: "meow meow",
};

console.log(
  "animal " + cat.name + " " + cat.speaks + " with " + cat.legsCount + " legs",
);

// prints animal information and takes object as an argument.
function printStr(animal) {
  console.log(
    "animal " +
      animal.name +
      " " +
      animal.speaks +
      " with " +
      animal.legsCount +
      " legs",
  );
}

printStr(dog);
printStr(cat);
