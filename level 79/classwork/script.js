//  1 გააკეთეთ destructuring'ის 3 მაგალითი list'ზე და 3 მაგალითი object'ზე

// 1)
const numbers = [1, 2, 3];
const [first] = numbers;
console.log(first); 
// 2)
const points = [100, 200, 300];
const [a, b, c] = points; 
console.log(a, b, c); 
// 3)
const colors = ['red', 'green', 'blue'];
const [, secondColor, ] = colors;
console.log(secondColor);




//  2  გამოიყენეთ rest operator'ის 3 მაგალითი


// 1)
const numbers1 = [1, 2, 3, 4, 5];
const [first1, second, ...rest] = numbers1;
console.log(first1); 
console.log(second); 
console.log(rest); 
// 2)
const person = { name: 'John', age: 25, country: 'USA' };
const { name, ...otherDetails } = person;
console.log(name); 
console.log(otherDetails); 
// 3)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); 




//   3  გამოიყენეთ spread operator'ის 3 მაგალითი


// 1)
const fruits = ['apple', 'banana'];
const moreFruits = ['cherry', 'date'];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits); 
// 2)
const user = { name: 'Alice', age: 25 };
const address = { city: 'Tbilisi', country: 'Georgia' };
const userDetails = { ...user, ...address };
console.log(userDetails); 
// 3)
const originalPerson = { name: 'John', age: 30 };
const copiedPerson = { ...originalPerson };
copiedPerson.age = 35;
console.log(originalPerson);
console.log(copiedPerson); 


  
// 4

    // Rest Operator 
    // The rest operator (...) is used to collect multiple elements into a single variable.
    // It is typically used in function parameters or destructuring to gather remaining items into an array or object.



    // Spread Operator 
    // The spread operator (...) is used to expand or spread elements of an array or object.
    // It is commonly used to copy arrays/objects or combine multiple arrays/objects into one.

