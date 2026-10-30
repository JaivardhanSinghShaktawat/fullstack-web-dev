# Timers

## What are timers ?

- timers are used to execute some logic after some duration.

## setTimeout()

- it is a global function that calls a function after a certain duration.

```js
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
```

## setInterval()

- it is a global function that calls a function after every fixed duration of time.

```js
// setInterval()
// setInterval(callbackFn, milliseconds)

function greetAlien() {
  console.log("Hello Alien");
}

// setInterval() will call greetAlient again and again after every 2 seconds.
setInterval(greetAlien, 2 * 1000);
```
