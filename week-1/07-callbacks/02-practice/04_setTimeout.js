// setTimeout()
// setTimeout(callbackFn, milliseconds)

function greet() {
  console.log("Hello World");
}

function greetAlien() {
  console.log("Hello Alien");
}

setTimeout(greet, 1 * 1000); // greet will be called after 1 second.

// greetAlien() will be called after 3 seconds.
setTimeout(greetAlien, 3 * 1000);
