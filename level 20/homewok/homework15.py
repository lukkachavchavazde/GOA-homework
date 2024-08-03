def square_list(numbers):
    squared_numbers = []
    for num in numbers:
        squared_numbers.append(num ** 2)
    return squared_numbers

test_case = [3, 12, 5, 2, 6]
print("new list", square_list(test_case)) 