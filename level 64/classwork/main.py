# 1

# Instance method:
# Works with a specific instance (object) of the class.
# Accessed through the instance (using 'self').
# - Can modify or access instance-specific data.

# Class method:
# Works with the class itself, not specific instances.
# Accessed through the class (using 'cls').
# Typically used for class-level data or behaviors that don't depend on instances.


# 2
# Instance method:
# Works with a specific instance (object) of the class.
# Accessed through the instance (using 'self').
# Can modify or access instance-specific data.

# Static method:
# Does not work with instances or the class.
# Accessed through the class or instance, but doesn't take 'self' or 'cls'.
# Does not modify or access instance or class data, useful for utility functions.


#3
# Class method:
#Works with the class itself, not with specific instances.
#Accessed through the class (using 'cls').
#Can modify or access class-level data, but not instance data.

# Static method:
#Does not work with the class or instances.
#Does not take 'self' or 'cls'.
#Used for utility functions that don't need to modify or access class or instance data.


# 4
# Instance method:
#Use when you need to work with or modify data specific to an instance of the class.
#Ideal when behavior depends on individual objects (e.g., each object having its own state).

# Class method:
#Use when you need to work with or modify data shared by all instances of the class (class-level data).
# - Ideal for factory methods or operations that need to access or modify class attributes.

# Static method:
#Use when the method does not need to access instance or class data.
#Ideal for utility functions that perform a task but are not related to the object's or class's state.


# 5
class Employee:
    company_name = "elite motors"
    
    def __init__(self, name, position):
        self.name = name
        self.position = position
    
    @classmethod
    def create_default_employee(cls, name):
        return cls(name, "Software Engineer")
    
    def display_info(self):
        print(f"Name: {self.name}, Position: {self.position}, Company: {self.company_name}")


# 6
class MathOperations:
    
    @staticmethod
    def add(a, b):
        return a + b
    
    @staticmethod
    def multiply(a, b):
        return a * b




