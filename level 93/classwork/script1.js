// const add = (a, b) => a + b;
// const greet = name => `Hello, ${name}!`;
// const square = x => x * x;






// const name = "Luka";
// const message = `Welcome, ${name}!`;
// const multiLine = `This is 
// a multiline 
// string.`;
// const sum = (a, b) => `Sum: ${a + b}`;






// const person = { name, age: 25 };
// const createCar = (brand, model) => ({ brand, model });
// const user = { username: "Luka", status: "active" };




const greetDefault = (name = "Guest") => `Hello, ${name}!`;
const sumDefault = (a, b = 5) => a + b;
const multiply = (x, y = 2) => x * y;


const sumAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(sumAll(1, 2, 3, 4, 5));


const person = { name: "Luka", age: 14 };
const updatedPerson = { ...person, city: "nataxtari" };

console.log(updatedPerson); 







