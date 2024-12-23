class Animal:
    def __init__(self, name):
        self.name = name
    
    def sound(self):
        print(f"{self.name} makes a sound.")
    
    def move(self):
        print(f"{self.name} moves.")


class Prey(Animal):
    def __init__(self, name):
        super().__init__(name)  

    def flee(self):
        print(f"{self.name} runs away to escape from predators.")


class Predator(Animal):
    def __init__(self, name):
        super().__init__(name) 
    
    def hunt(self):
        print(f"{self.name} is hunting for food.")


class Rabbit(Prey):
    def __init__(self, name):
        super().__init__(name) 
    
    def sound(self):
        print(f"{self.name} makes a squeak sound.")  

class Hawk(Predator):
    def __init__(self, name):
        super().__init__(name)  
    
    def sound(self):
        print(f"{self.name} makes a screeching sound.")  
    
    def hunt(self):
        print(f"{self.name} is hunting small animals.")


rabbit = Rabbit("Rabbit")
hawk = Hawk("Hawk")


rabbit.sound()  
rabbit.move()
rabbit.flee()


hawk.sound()  
hawk.move()
hawk.hunt()
