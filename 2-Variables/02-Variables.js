/*
Introduction to Programming with Javascript, Exercises Chapter 2 - Variables

*/
console.log('***** Exercise 1 *****');
console.log('see greeter.js');

console.log();

console.log('***** Exercise 2 *****');
console.log('see age.js');

console.log('***** Exercise 3 *****');
/* {
  let foo = 'bar';
}
console.log(foo); */
console.log('{ let foo = \'bar\'; } console.log(foo);');
console.log('You get \'ReferenceError: foo is not defined\' because foo is declared inside a block.');
console.log();

/* const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME); */

console.log('***** Exercise 4 *****');
console.log('You get \'Assignment to constant variable.\' because you cannot reassign a value to a const variable.');
console.log();

console.log('***** Exercise 5 *****');
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
console.log('The program prints out \'bar\'');
console.log();
console.log('***** Exercise 6 *****');
console.log('You don\'t get any errors because the variables are declared in different scopes.');
console.log();