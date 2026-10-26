// This program demonstrate that C++ program cannot run partially.

#include<iostream>
using namespace std ; 

int main() {
    cout << "Hello World" << endl ; 
    cout << a << endl ; // compile time error will come here.
    return 0 ; 
}