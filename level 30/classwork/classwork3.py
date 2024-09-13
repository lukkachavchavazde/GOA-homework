# Creating a dictionary with lists as values
dictionary = {
    'fruits': ['apple', 'banana', 'cherry'],
    'animals': ['dog', 'cat', 'elephant'],
    'colors': ['red', 'green', 'blue']
}

print("Values using a for loop:")
for key in dictionary:
    print(f"{key}: {dictionary[key]}")
