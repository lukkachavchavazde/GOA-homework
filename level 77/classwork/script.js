// 1

const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}


const word = 'hello';

for (const letter of word) {
  console.log(letter); 
}

const numbers = new Set([1, 2, 3, 4, 5]);

for (const num of numbers) {
  console.log(num);
}



// 2
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (const key in person) {
    console.log(key, person[key]);
  }




  const fruits1 = ['vashli', 'nsxali', 'atami'];

for (const index in fruits1) {
  console.log(index, fruits1[index]); 
}

  

const word1 = 'hello';

for (const index in word1) {
  console.log(index, word1[index]);
}



// 3
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  console.log(greet('John')); 



const greetArrow = (name) => {
    return `Hello, ${name}!`;
  };
  
  console.log(greetArrow('John')); 



//   4
  
const sum = (a = 5, b = 10) => {
    return a + b;
  };
  
  console.log(sum(3, 4)); 
  console.log(sum(3));    
  console.log(sum());      
  













// cw 2
//  1
 const person1 = {
    name: 'ლუკა',
    age: 14,
    greet: function() {
        console.log(`გამარჯობა, ჩემი სახელი არის ${this.name} და მე ვარ ${this.age} წლის!`);
    }
};

person1.greet();  


//2

const key = 'age';
const value = 110;

const person2 = {
    name: 'ნია',
    [key]: value,  
    greet() {
        console.log(`გამარჯობა, ჩემი სახელი არის ${this.name} და მე ვარ ${this.age} წლის!`);
    }
};

console.log(person2);  
person.greet();  




// 3

const person3 = {
    name: 'მანანა',
    age: 125
};

const address = {
    city: 'თბილისი',
    country: 'საქართველო'
};


Object.assign(person, address);

console.log(person);


