// Create a counter in JavaScript (counts down 30 to 0)

function counter(n) {
  let cnt = n;
  let intervalId = setInterval(function () {
    console.clear(); // clearing the previous output
    if (cnt < 0) {
      // checking what is the current value of cnt.
      clearInterval(intervalId); // clearing the interval.
      return;
    }
    console.log(cnt);
    cnt--;
  }, 1 * 1000);
}

counter(30);
