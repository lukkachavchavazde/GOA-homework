// 1
const gamer = {
    name: "გიორგი",
    age: 25,
    interests: ["ვიდეო თამაშები", "სპორტული თამაშები", "ტექნოლოგია"],
    gamingSetup: {
      console: "PlayStation 5",
      headset: "SteelSeries Arctis 7",
      controller: "DualSense",
    },
    play: function(game) {
      console.log(`${this.name} თამაშობს ${game} -ზე!`);
    }
  };
  
  gamer.play("FIFA 24");
  



  const musician = {
    name: "ეკატერინე",
    age: 30,
    interests: ["მუსიკა", "გიტარა", "კომპოზიცია"],
    instruments: ["გიტარა", "პიანინო", "დოლი"],
    play: function(instrument) {
      console.log(`${this.name} უკრავს ${instrument}ზე!`);
    },
    composeMusic: function(style) {
      console.log(`${this.name} წერს ${style} სიმღერას.`);
    }
  };
  
  musician.play("გიტარა");
  musician.composeMusic("ფოლკ");
  



  const gardener = {
    name: "მარიამი",
    age: 45,
    interests: ["ბაღი", "ბუნება", "მცენარეები"],
    gardenTools: ["ნიჩაბი", "თოხი", "ჯოხი"],
    plant: function(plantName) {
      console.log(`${this.name} უვლის ${plantName}-ს.`);
    },
    waterGarden: function() {
      console.log(`${this.name} მორწყავს ბაღს.`);
    }
  };
  
  gardener.plant("წიწაკა");
  gardener.waterGarden();
  








// 2

  function Car(make, model, year) {
    this.make = make;    
    this.model = model;  
    this.year = year;    
  }





const car1 = new Car("Toyota", "Corolla", 2020);


const car2 = new Car("BMW", "320i", 2018);

const car3 = new Car("Tesla", "Model S", 2022);


console.log(car1);
console.log(car2);
console.log(car3);

  
// 3


function Person(name, age, gender, occupation) {
    this.name = name;      
    this.age = age;          
    this.gender = gender;    
    this.occupation = occupation; 
  }
  


const person1 = new Person("გიორგი", 30, "მამაკაცი", "პროგრამისტი");

const person2 = new Person("მარიამი", 25, "ქალი", "დიზაინერი");

const person3 = new Person("ლუკა", 40, "მამაკაცი", "დირექტორი");

console.log(person1);
console.log(person2);
console.log(person3);

/// 4
function Animal(species, age, color) {
    this.species = species; 
    this.age = age;          
    this.color = color;      
  }
  


const animal1 = new Animal("Cat", 3, "White");


const animal2 = new Animal("Dog", 5, "Brown");


const animal3 = new Animal("Elephant", 10, "Gray");

console.log(animal1);
console.log(animal2);
console.log(animal3);





//5
// Constructor functions in JavaScript are used to create and initialize objects. They allow you to set up properties
//  (attributes) and methods for the objects that are created using the constructor.