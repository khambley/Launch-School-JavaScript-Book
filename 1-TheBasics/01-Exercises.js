/*
1. Concatenate two or more strings, one with your first name and one with your last, 
   to create a string with your full name as its value. For example, if your name is John Doe, 
   think about how you can put 'John' and 'Doe' together to get 'John Doe'.
*/
console.log('***** Exercise 1 *****');
let firstName = 'Katherine';
let lastName = 'Hambley';
console.log(firstName + ' ' + lastName);
console.log();

/* 2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:
      thousands place is 4
      hundreds place is 9
      tens place is 3
      ones place is 6 
*/
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log('***** Exercise 2 *****');
readline.question(`Type in a 4-digit whole number: `, (number) =>{
  console.log(`You typed in ${number}`)
  number = number;
  let ones = number % 10; //6
  number = (number - ones) / 10; //493

  let tens = number % 10; //3
  number = (number - tens) / 10; //49

  let hundreds = number % 10; //9
  let thousands = (number - hundreds) / 10 //4

  console.log('thousands place is ' + thousands);
  console.log('hundreds place is ' + hundreds);
  console.log('tens place is ' + tens);
  console.log('ones place is ' + ones);
  
  readline.close()

  /* 3. Identify the data type for each of the following values:

    'true'
    false
    1.5
    2
    undefined
    { foo: 'bar' } 
*/
console.log();
console.log('***** Exercise 3 *****');
let typeof1 = typeof 'true';
console.log('The typeof \'true\' is ' + typeof1);

let typeof2 = typeof false;
console.log('The typeof false is ' + typeof2);

let typeof3 = typeof 1.5;
console.log('The typeof ' + 1.5 + ' is ' + typeof3);

let typeof4 = typeof 2;
console.log('The typeof ' + 2 + ' is ' + typeof4);

let typeof5 = typeof undefined;
console.log('The typeof undefined is ' + typeof5);

let typeof6 = typeof { foo: 'bar' };
console.log('The typeof { foo: \'bar\' } is ' + typeof6);
console.log(); //blank line

/* 4. Given the code below, identify which lines are statements and which are expressions: */
console.log('***** Exercise 4 *****');
console.log('var foo is a statement');
console.log('foo = 5 is an expression');
console.log('foo is an expression');
console.log(); //blank line

/* 5. Explain why this code logs '510' instead of 15 */
console.log('***** Exercise 5 *****');
console.log('console.log(\'5\' + 10) is 510 because 5 is a string and JavaScript implicitly coerces the 10 into a string and concatenates them');
console.log();

/* 6. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead. */
console.log('***** Exercise 6 *****');
console.log(Number('5') + 10);
console.log();

/* 7. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console: */
console.log('***** Exercise 7 *****');
console.log(`The value of 5 + 10 is ${5 + 10}`);
console.log();

/* 8. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example: */
console.log('***** Exercise 8 *****');
var foo = ['a', 'b', 'c'];
console.log(foo.length);
console.log(foo[3]);
console.log('Nope, no error, just returns undefined');
console.log();

/* 9. Create an array named names that contains a list of pet names. For instance: */
console.log('***** Exercise 9 *****');
var petNames = ['benny', 'max', 'maggie', 'patches', 'spatz'];
console.log(petNames);
console.log();

/* 10. Create an object named pets that contains a list of pet names and the type of animal. For instance: */
console.log('***** Exercise 10 *****');
var petNameAnimal = {
  benny:    'dog',
  max:      'dog',
  maggie:   'dog',
  patches:  'cat',
  spatz:    'cat',   
};
console.log(petNameAnimal);
console.log();

/* 11. What value does the following expression evaluate to? */
console.log('***** Exercise 11 *****');
console.log(`The expression, \'foo\' === \'Foo\' evaluates to ${'foo' === 'Foo'}`);
console.log();

/* 12. What value does the following expression evaluate to? */
console.log('***** Exercise 12 *****');
console.log(`The value the expression parseInt('3.1415') evaluates to is ${parseInt('3.1415')}`);

/* 13. What value does the following expression evaluate to? */
console.log(`The value the expression '12' < '9' evaluates to is ${'12' < '9'}`);
console.log()
});




