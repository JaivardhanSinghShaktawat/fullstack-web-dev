function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());
  console.log("Full Year:", currentDate.getYear() + 1900);

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970 and till this object was
  // created.
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);

  // number of milliseconds starting from 1st January, 1970 till now.
  console.log(Date.now());

  console.log(currentDate.toLocaleTimeString());
  console.log(currentDate.toLocaleDateString());
  console.log(currentDate.toDateString());
  console.log(currentDate.toISOString());
  console.log(currentDate.toUTCString());
}

// Example Usage for Date Methods
dateMethods();

let currentDate = new Date();

console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log("Time in milliseconds since 1970:", currentDate.getTime());

// calculating time taken to run a function.
function calculateSum() {
  let a = 0;
  for (let i = 1; i <= 100000; i++) {
    a += i;
  }
  return a;
}

const startTime = new Date().getTime();
calculateSum();
const endTime = new Date().getTime();
console.log("Total time taken", endTime - startTime);

// print current time
function clock() {
  let intervalId = setInterval(() => {
    console.clear();
    console.log(new Date().getTime());
  }, 1000);
}

clock();
