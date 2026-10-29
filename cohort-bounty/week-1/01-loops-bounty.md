# Loops Bounty

## When this below code runs, why one of the cores don't reach to 100% usage ?

```js
let sum = 0;

for (let i = 0; i < 1000000000000; i++) {
  sum = sum + i;
}

console.log(sum);
```

**Answer :** The above code will run continously and will never make the thread free.So, one of the core will always reach to 100% usage. If it's not showing 100% usage than it means the htop or top command is not working properly.
