# Interpreted Vs Compiled Languages

## Interpreted Languages

- Interpreted languages are executed line by line.Here code is executed directly and no binary file is created.

- Usually go line by line.

- Can run partially if the error comes later.

- Interpreted languages go line by line while executing, can partially run unitl an error comes.

- Ex : JavaScript,Python are interpreted languages.

### JavaScript basic program

- Just run the below command to run this program.

1. node file_name.js + enter

```js
console.log("Hello World");
```

### Interpreted languages can run partially.

```js
// This program demonstrate that javascript can run partially.

console.log("Hello World"); // this line will get executed.
console.log(a); // error will come at this line and interpreter will stop.
```

## Compiled Languages

- C++ is a compiled language.

- Compiled languages are first compiled into binary language and then this binary file is run.

- Here binary file is created and that binary file is executed.

- First need to compile, then need to run.

- Usually don't compile if there is an error in the code.

- This will run fully or will not run.

- Ex : C,C++,Rust,Java,Golang etc are compiled languages.

### Basic C++ program

- g++ file_name.cpp -o temp // to compile the cpp file.

```cpp
// This is a basic C++ program.

// command to compile : g++ main.cpp -o temp
#include<iostream>
using namespace std ;

int main() {
    cout << "hello world" << endl ;
    return 0 ;
}
```

- There are three steps to run and compile C++ code.

1. write the code.
2. compile the code.
3. run the code.

### Compiled languages can't run partially

```cpp
// This program demonstrate that C++ program cannot run partially.

#include<iostream>
using namespace std ;

int main() {
    cout << "Hello World" << endl ;
    cout << a << endl ; // compile time error will come here.
    return 0 ;
}
```
