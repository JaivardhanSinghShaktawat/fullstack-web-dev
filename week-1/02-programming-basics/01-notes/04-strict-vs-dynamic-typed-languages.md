# Strict/Static Vs Dynamic Typed Languages

## Strict/Static Typed Languages

- C++ have strong types.

- Compile time error: compiler stops compiling the code.

- Ex : C,C++,Rust,Golang,Java,TypeScript.

- Advantage : more strict code

```cpp
// Example of strict/static languages
#include<iostream>
using namespace std ;

int main() {
    int number = 5 ; // defining a variable of integer type
    number = "hello" ; // this will cause a compile-time error.

    cout << number << endl ;
    return 0 ;
}
```

## Dynamic/Loosely Typed Langauges

- JavaScript is loosely/dynamically typed.It allows you to change the types of the variable.

- We get a lot of runtime errors in JavaScript.

- In larger codebase, we use types.That's why TypeScript is used in larger projects.

- Ex : JavaScript,Python etc.

- Advantage : can move faster.

```js
// Example of dynamic language
let number = 6; // variable initially holds a number
number = "Hello"; // variable now holds a string
console.log(number); // Output : Hello
```
