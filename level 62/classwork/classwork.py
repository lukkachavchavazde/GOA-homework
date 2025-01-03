# 1
def add_numbers(*args):
    total = 0
    for num in args:
        total += num
    return total


result = add_numbers(1, 2, 3, 4, 5)
print(result)  

# 2
def describe_pet(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

describe_pet(name="Fluffy", species="Cat", age=3)



# 3
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound."

class Mammal(Animal):
    def __init__(self, name, species):
        super().__init__(name)
        self.species = species

    def speak(self):
        return f"{self.name} is a {self.species} and makes a sound."

class Dog(Mammal):
    def __init__(self, name, species, breed):
        super().__init__(name, species)
        self.breed = breed

    def speak(self):
        return f"{self.name}, a {self.species} of breed {self.breed}, barks."

dog = Dog("Rex", "Mammal", "German Shepherd")
print(dog.speak()) 

# 4
class MyClass:
    def __init__(self):
        self._internal_value = 42  

    def get_value(self):
        return self._internal_value


obj = MyClass()
print(obj.get_value()) 
print(obj._internal_value) 


# 5
class MyClass:
    def __init__(self):
        self._internal_value = 42  

    def get_value(self):
        return self._internal_value


obj = MyClass()
print(obj.get_value())
print(obj._internal_value)  



# 6
class MyClass:
    def __init__(self):
        self.__private_value = 100 

    def get_private_value(self):
        return self.__private_value


obj = MyClass()
print(obj.get_private_value())  
print(obj._MyClass__private_value)  

