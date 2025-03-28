// შექმენით car class, მიეცით 4 ატრიბუტი და შეუქმენით 2 ფუნქცია class'ში. ამ class'ისგან შექმენით 3 ობიექტი და სამივეზე გატესტეთ ყვლა ატრიბუტის გამოტანა და მეთოდები.
class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    displayInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    }

    changeColor(newColor) {
        this.color = newColor;
        return `The new color of the car is ${this.color}`;
    }
}

const car1 = new Car("Toyota", "Corolla", 2020, "Red");
const car2 = new Car("BMW", "X5", 2022, "Black");
const car3 = new Car("Ford", "Mustang", 2021, "Blue");

console.log(car1.displayInfo());
console.log(car1.changeColor("White"));





class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }
}

