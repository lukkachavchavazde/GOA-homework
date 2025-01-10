# 1. Instance Method
# - An instance method is a typical method that is defined within a class.
# - The first argument is always 'self', which means it operates on a specific instance (object) of the class.
# - This method works with the object's data (attributes) and other methods defined within the class.

# 2. Class Method
# - A class method is a method that operates on the class itself, not on individual objects.
# - The first argument is 'cls', which means this method has access to class-level data (attributes).
# - This method can be used for tasks like creating alternative constructors or performing actions at the class level.

# 3. Static Method
# - A static method is a method that doesn't depend on either the class or any instance (object).
# - It doesn't take 'self' or 'cls' as arguments.
# - Static methods can be used for any functionality that doesn't require access to the class or object data, but might logically belong to the class.

# - The differences between instance method, class method, and static method are:
#    - Instance method works on an object, class method works on the class, and static method is completely independent of both.
