/* 
Introduction to Programming with Javascript, Exercises Chapter 2 - Variables

2. Write a program named age.js that includes someone's age and then calculates 
and reports the future age in 10, 20, 30 and 40 years. 
Below is the output for someone 20 years old.

You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.

*/
let age = 20;
let increment = 10;
console.log(`You are ${age} years old.`);
for (var counter = 1; counter <= 5; counter++){
  console.log(`In ${increment} years, you will be ${age + increment} years old.`);
  increment = increment + 10; 
}
