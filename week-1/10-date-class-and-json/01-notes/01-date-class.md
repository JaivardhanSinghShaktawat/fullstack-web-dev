# Date Class

## What is Date class ?

- It is a global class that we can use in JavaScript.

- Global class means we can use directly.

**Note :** We generally use Epoch time.It means number of milliseconds passed starting from 1st January, 1970.

## Date object Methods

1. getDate(): it returns the date.

2. getMonth(): it returns the month.

3. getYear(): it returns the (current year - 1900) when the object was created.

4. getHours(): it returns the hours.

5. getMinutes(): it returns the minutes.

6. getSeconds(): it returns the number of seconds.

7. setYear(): set the year on the current date object.

8. setMonth(): set the month on the current date object.

9. setDate(): set the date on the current date object.

10. date.getTime(): returns the number of milliseconds passed starting from 1st January, 1970

```js
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
```
