## Today Class Topics

1. Async functions vs sync functions
2. real world use of callbacks
3. JavaScript browser architecture
4. Promises
5. Async Await

## What does synchronous mean ?

- Synchronous meaning in english: Together, one after the other, sequential (these are synonyms of synchronous word)

- Only one thing is happening at a time.

## What does asynchronous mean ?

- Opposite of synchronous
- Happens in parts
- Multiple things are context switching with each other.

## Building Intuition For Synchronous

- JavaScript is single threaded.
- It can do only one thing at a time.
- But it can context switch between tasks and can delegate the tasks to other.

## Cooking Maggie Example

You have 4 tasks to perform to cook maggie:-

1. Boil Water
2. Cut vegetables
3. Cut maggi packet
4. Get ketchup from the shop nearby

How would you do this ? Synchronously or Asynchronously ?

- The synchronous way of creating maggi will take more time as compared to the asynchronous way of creating maggie.

- Whenever a synchronous function runs than we have to wait for it's execution.

- Whenever an asynchronous task, we can delegate the task to the other thread and not the main single thread.Ex: reading a file from the file system, making an http request or connecting with the database.

## Conclusion

- Even if you are single threaded (JavaScript is single threaded), you can do things parallely by delegating.You can also context switch between tasks if needed (the net time to do both the things would still be the same)

- Net amount of time take to do a task can be decreased by doing these two things (delegating and context switching)

## How does JavaScript do the same ? Can JavaScript delegate ? Can JavaScript context switch ?

- Yes, by using asynchronous functions.

## Synchronous Functions

- When this code will run than the javascript thread will remain busy.

```js
// This is a synchronous function.
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

console.log(findSum(1000));
```

## Asynchronous Functions

- setTimeout() is a global function that calls a function after a fixed duration of time.

```js
// setTimeout() is an asynchronous function.
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}
function findSumTill100() {
  console.log(findSum(100));
}

// calling an async function.
setTimeout(findSumTill100, 1000);
console.log("hello world");

/*
Output : hello world
4950
*/
```

## Creating a synchronous setTimeout() function

```js
// setTimeout() is an asynchronous function.
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}
function findSumTill100() {
  console.log(findSum(100));
}

// busy waiting
function syncSleep() {
  let a = 1;
  for (let i = 0; i < 10000000000; i++) {
    a++;
  }
}

syncSleep(); // synchronous setTimeout() function
findSumTill100();

// setTimeout(findSumTill100, 1000);
console.log("Hello World");
```

## What are common async functions ?

1. setTimeout(), setInterval()
2. fs.readFile() - to read a file from your file system.
3. fetch() - to fetch some data from an API endpoint.
