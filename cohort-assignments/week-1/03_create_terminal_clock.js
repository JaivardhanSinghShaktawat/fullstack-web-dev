// Create a terminal clock (HH:MM:SS)

// function that adds a 0 as prefix if hours,minutes or seconds are less than 10.
function checkValueBelowTen(n) {
  let val = n;

  if (n < 10) {
    val = `0${val}`;
  }
  return val;
}

function clock() {
  let date = null;
  let intervalId = setInterval(() => {
    console.clear();
    date = new Date();
    const hours = checkValueBelowTen(date.getHours());
    const minutes = checkValueBelowTen(date.getMinutes());
    const seconds = checkValueBelowTen(date.getSeconds());

    // logging the hours,minutes and seconds after every second
    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);
}

clock();
