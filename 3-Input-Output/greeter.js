/*
Introduction to Programming with Javascript, Exercises Chapter 3 - Input / Output
Write a dynamic greeter program named greeter.js. 
The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

Modify the greeter.js program to ask for the user's first and last names separately, 
then greet the user with their full name.
*/
let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");
let fullName = firstName + ' ' + lastName;
console.log(`Hello, ${fullName}!`);