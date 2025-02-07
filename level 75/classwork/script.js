const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
});



// 2

// ES6 introduces:
// - 'let' and 'const' for block-scoped variables and constants.
// - Arrow functions with shorter syntax and lexical 'this'.
// - Template literals for easier string interpolation.
// - Destructuring for quick value extraction from arrays/objects.
// - Default parameters for function fallbacks.
// - Spread/rest operators ('...') for expanding/collecting data.
// - Classes for cleaner OOP and inheritance.
// - Modules for better code organization with 'import' and 'export'.
// - Promises for easier async handling.

// These features improve code readability and maintainability.


// 3
// with my words the scope lockes  a function 
//  inside it and dose not allow any interaction from out of the scope








// 4


// let name = "luka";
// let age = 14
// let city = "nataxtari";

// let message = `My name is ${name}, I'm ${age} years old, and I live in ${city}.`;
// console.log(message);

// let greeting = `Hello, ${name}!`;
// console.log(greeting);

// let multiline = `I live in ${city}.
// It's a great place to be.`;
// console.log(multiline);





// 5

let age = 20;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you can't vote.";
console.log(canVote);

let score = 85;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result);

let isRainy = true;
let weatherMessage = isRainy ? "Take an umbrella." : "Enjoy the sunshine!";
console.log(weatherMessage);



// 6
let bool = false;
bool && console.log("You are adult."); 

let userLoggedIn = true;
userLoggedIn && console.log("Welcome back, user!"); 

let hasPermission = true;
hasPermission && console.log("You have access to this page."); 
