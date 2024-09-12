def manual_max(lst):

    
    max_value = lst[0]  

    for num in lst[1:]:  
        if num > max_value:
            max_value = num  

print(manual_max([3, 3423424, 24334, 42232, 43243, 23424, 234234])) 
  