let a = 5;
let b = 10;
[a, b] = [b, a];
console.log("a:", a); 



function collectRest(...args) {
    console.log(args);  
  }
  
  collectRest(1, 2, 3, 4);
  
  const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  

console.log(arr2);  
