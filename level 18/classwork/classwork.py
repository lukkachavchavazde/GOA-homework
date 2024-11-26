
# task 1


def greet(name):
    print(f"Hello, {name}!")

greet("luka")


# task 2
def sum_of_nubers(num1,num2,num3):
    print(num1 + num2 + num3)

sum_of_nubers(3,5,7)

# task3

def range1(start,end):
    for i in range(start,end):
        print(i)

range1(3,10)


# task4

def luk(luka, chavchavadze, goal_oriented_academy, r):
    for i in range(r):  
        print(f"My name is {luka}")
        print(f"My surname is {chavchavadze}")
        print(f"I study in {goal_oriented_academy}")


luk("Luka", "Chavchavadze", "Goal Oriented Academy", 1)






# task5
def multiply(num11,num21,num31):
     print(num11 * num21 * num31)

multiply(1,2,3)









# task6

def discount(age):
    if age <= 18:
        return "discount"
    else:
        return "no dicount"

print(discount(age=11))
print(discount(age=21))
print(discount(age=1))



# task7
def print_list_elements(my_list): 
    for element in my_list: 
        print(element)


my_list = [1, 2, 3, 4, 5]
print_list_elements(my_list)
