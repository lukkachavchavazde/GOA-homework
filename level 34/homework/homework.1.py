try:
    print() 
except NameError:
    print("NameError: The variable 'x' is not defined.")

my_list = [1, 2, 3]
try:
    print(my_list[5])
except IndexError:
    print("IndexError: List index is out of range.")

try:
    number = int("abc")
except ValueError:
    print("ValueError: Cannot convert 'abc' to an integer.")
