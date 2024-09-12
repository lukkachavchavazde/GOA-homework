def manual_min(lst):
   
    min_value = lst[0] 
    for num in lst[1:]:  
        if num < min_value:
            min_value = num  

    return min_value

print(manual_min([3, 1, 4, 1, 5, 9, 2])) 
print(manual_min([-10, 2, 3, 0, -5]))    