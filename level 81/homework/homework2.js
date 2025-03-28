class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); 
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name); 
    }
  
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  class Bird extends Animal {
    constructor(name) {
      super(name); 
    }
  
    speak() {
      console.log(`${this.name} chirps.`);
    }
  }
  