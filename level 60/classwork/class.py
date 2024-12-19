class Person:
    total_people = 0  

    def __init__(self, name, age, occupation):
        self.name = name        
        self.age = age          
        self.occupation = occupation  
        Person.total_people += 1   

    def person_info(self):
        return f"{self.name}, {self.age} years old, {self.occupation}"


    def have_birthday(self):
        self.age += 1


person1 = Person("Alice", 30, "Engineer")
person2 = Person("Bob", 25, "Doctor")
person3 = Person("Charlie", 35, "Artist")


print(person1.person_info())