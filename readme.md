# Introduction to Programming with JavaScript  
This repo contains my solutions to the coding exercises contained in the Introduction to Programming with JavaScript book [here](https://launchschool.com/books/javascript).
1. The Basics
    1. Data type
    2. Operations
    3. Explicit Coercion <--weird sounding word!
    4. Data Structures
        1. Arrays
        2. Objects  
            * A JavaScript object is a collection of key-value pairs.  
            `{ dog: 'barks', cat: 'meows', pig: 'oinks' }`  
            * To retrieve value by its key:  
            `({ dog: 'barks', cat: 'meows', pig: 'oinks' })['cat']` = 'meows'  
    5. Expressions and Return Values  
        * An expression is anything that JavaScript can evaluate to a value (including undefined and null).  
            * Expressions do something, but they also return or evaluate to a value. Example:  
            `console.log('Hi!')` prints Hi to the screen but returns `undefined` as the value.  
    6. Statements  
        * A complete list on the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements). 
        * Statements always evaluate as `undefined` 
        * A statement is a syntactic unit that expresses an operation to be carried out.  
    7. Summary  
    8. Exercises  
        * See 1-TheBasics/01-Exercises.js  
2. Variables
    1. Variable Naming
    2. Declaring and Assigning Variables
        * `let` keyword - `let a` is declared but `undefined`  
        * Variables reference values in memory that aren't deeply-linked to each other. If you change one variable, it doesn't change other variables with the same value. 
    3. Declaring Constants
        * `const` keyword - once you initalize a constant, you can't give it another value.  The value remains the same in every part of the program: a block, or a function.  
    4. Variable scope
        * `let` or `const` variables have **block** scope.  
        * Blocks are a related set of JavaScript statements and expressions between a pair of opening and closing curly braces `{ }`.
    5. A Common Gotcha
        * All undeclared variables have global scope, example: `p = 'foo'`.  
    6. Summary  
    7. Exercises
        * see 02-Variables.js  
3. Input / Output  
    1. Command Line Output  
        * `console.log("Hello, World")`  
    2. Command Line Input  
        
        







