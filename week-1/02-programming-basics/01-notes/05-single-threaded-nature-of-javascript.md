# Single Threaded Nature Of JavaScript

## Types of languages

1. Single threaded languages : these languages can run only on one core.

- Ex : JavaScript,Python

2. Multithreaded languages : these languages can run on multiple cores.

- Ex : C++,Java,Golang,Rust etc.

## What is a thread ?

- set of instructions

## What is a core ?

- It is a part of processor that executes set of instructions.

- A single core cannot run two process at a single time.

- CPU also does context switching between the processes.

## What is single threaded nature of JavaScript means ?

- JavaScript is a single threaded language.

- It means JavaScript program can run only one a single core.

- JavaScript program cannot run on multiple cores.

- JavaScript can use only one of the core at a single time and that's why it is considered bad language for scalable systems.

- We can use all the cores in NodeJs by using cluster module and IPC (inter process communication) but it is not as optimized as doing multithreading in C++ or Java.

- JavaScript runs line by line, only one line at a time.
