// // 1
// let myArray = [10, 20, 30, 40, 50];
// let fruits = ["apple", "banana", "cherry"];
// // let mixedArray = [1, "hello", true, [2, 3], { name: "John" }];


// 2
let myArr = new Array(10, 20, 30, 40, 50);
let fruit = new Array("apple", "banana", "cherry");
let mixedArr = new Array(1, "hello", true, [2, 3], { name: "John" });

// 3
let Array = new Array(5);


myArray[0] = 10;
myArray[1] = 20;
myArray[2] = 30;
myArray[3] = 40;
myArray[4] = 50;

console.log(myArray);

// 4
let myArray = [10, 20, 30, 40, 50];
let fruits = ["apple", "banana", "cherry"];
let mixedArray = [1, "hello", true, [2, 3], { name: "John" }];

myArray[0] = 100;
myArray[1] = 200;
myArray[2] = 300;
myArray[3] = 400;
myArray[4] = 500;

fruits[0] = "orange";
fruits[1] = "grape";
fruits[2] = "kiwi";

mixedArray[0] = 42;
mixedArray[1] = "world";
mixedArray[2] = false;
mixedArray[3] = [4, 5];
mixedArray[4] = { name: "Jane" };

console.log(myArray);
console.log(fruits);
console.log(mixedArray);




// 5
let myArray = [10, 20, 30, 40, 50];
let fruits = ["apple", "banana", "cherry"];
let mixedArray = [1, "hello", true, [2, 3], { name: "John" }];

let myArraySlice = myArray.slice(1, 4);
let fruitsSlice = fruits.slice(0, 2);
let mixedArraySlice = mixedArray.slice(2, 5);

console.log(myArraySlice);
console.log(fruitsSlice);
console.log(mixedArraySlice);



// 6
function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
  console.log(getRandomNumber(10));

  

// 7
let counter = 0;

let interval = setInterval(function() {
  console.log(counter);
  counter++;
  if (counter > 30) {
    clearInterval(interval);
  }
}, 1000);



// 8
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

console.log(`${day}/${month}/${year}`);


