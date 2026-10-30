// setInterval()
// setInterval(callbackFn, milliseconds)

function greetAlien() {
  console.log("Hello Alien");
}

// setInterval() will call greetAlient again and again after every 2 seconds.
setInterval(greetAlien, 2 * 1000);
