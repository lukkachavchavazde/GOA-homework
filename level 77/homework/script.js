//  1 - For...of ციკლი
console.log("სავარჯიშო 1 - For...of ციკლი:");

const arr = [1, 2, 3, 4];
const str = "Hello";
const set = new Set([10, 20, 30]);

for (const num of arr) {
    console.log(num);
}

for (const char of str) {
    console.log(char);
}

for (const value of set) {
    console.log(value);
}


// 2 - For...in ციკლი
console.log("\nსავარჯიშო 2 - For...in ციკლი:");

const person = { name: "John", age: 30, job: "developer" };

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

for (const index in arr) {
    console.log(index);
}

for (const index in str) {
    console.log(index);
}


//  3 - ფუნქციები const და arrow ფუნქციების გამოყენებით
console.log("\nსავარჯიშო 3 - ფუნქციები const და arrow ფუნქციების გამოყენებით:");

const add = function(a, b) {
    return a + b;
};
console.log(add(2, 3));

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

const greet = () => "Hello, World!";
console.log(greet());


//  4 - ობიექტები მეთოდებით 'this' გამოყენებით
console.log("\nსავარჯიშო 4 - ობიექტები მეთოდებით 'this' გამოყენებით:");

const car = {
    brand: "Toyota",
    model: "Corolla",
    start: function() {
        console.log(`Starting ${this.brand} ${this.model}`);
    }
};
car.start();

const person2 = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person2.greet();

const book = {
    title: "JavaScript Basics",
    author: "John Doe",
    showDetails: function() {
        console.log(`Book: ${this.title} by ${this.author}`);
    }
};
book.showDetails();


//  5 - კომპიუტირებული თვისებები
console.log("\nსავარჯიშო 5 - კომპიუტირებული თვისებები:");

const prop = "age";
const person3 = {
    name: "David",
    [prop]: 25,
};
console.log(person3.age);

const dynamicKey = "isActive";
const user = {
    name: "Charlie",
    [dynamicKey]: true,
};
console.log(user.isActive);

const dynamicMethod = "greet";
const dynamicObj = {
    name: "Eve",
    [dynamicMethod]() {
        console.log(`Hello, ${this.name}`);
    }
};
dynamicObj.greet();


//  6 - Object.assign() მეთოდის გამოყენება
console.log("\nსავარჯიშო 6 - Object.assign() მეთოდის გამოყენება:");

const obj1 = { name: "John" };
const obj2 = { age: 30 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
