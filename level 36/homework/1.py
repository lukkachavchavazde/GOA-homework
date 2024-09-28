lists = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

averages = [sum(sublist) / len(sublist) for sublist in lists]

print(averages)
