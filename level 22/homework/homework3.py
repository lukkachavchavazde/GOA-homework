def manual_sum(lst):
    total = 0  

    for num in lst: 
        total += num  

    return total


print(manual_sum([1, 2, 3, 4, 5])) 
print(manual_sum([-1, -2, -3, 4, 5]))  
print(manual_sum([0, 0, 0, 0]))  
