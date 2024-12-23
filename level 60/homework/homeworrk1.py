# გააკეთეთ inheritance'ს მაგალითი ცხოველებზე (3 child class)

class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def speak(self):
        pass
    
    def move(self):
        print(f"{self.name} is moving.")
        
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")
        self.breed = breed
    
    def speak(self):
        print(f"{self.name} says Woof!")
    
    def fetch(self):
        print(f"{self.name} is fetching the ball.")

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Cat")
        self.color = color
    
    def speak(self):
        print(f"{self.name} says Meow!")
    
    def scratch(self):
        print(f"{self.name} is scratching the post.")

class Bird(Animal):
    def __init__(self, name, wing_span):
        super().__init__(name, "Bird")
        self.wing_span = wing_span
    
    def speak(self):
        print(f"{self.name} says Chirp!")
    
    def fly(self):
        print(f"{self.name} is flying with a wingspan of {self.wing_span} meters.")
