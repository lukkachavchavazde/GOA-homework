def manual_min(lst):
   
    min_value = lst[0] 
    for num in lst[1:]:  
        if num < min_value:
            min_value = num  

    return min_value

print(manual_min([1223, 555, 2345, 4545, -35353, 73, 23])) 
print(manual_min([343453, 383, -233, -2323, 2425]))    