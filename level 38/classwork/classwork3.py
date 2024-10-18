list1 = [1, 2, 3]
list2 = [4, 5, 6, 7]

squared_list2 = list(map(lambda x: x ** 2, list2))
result = list(map(lambda x, y: x + y, list1, squared_list2))

print(result)
