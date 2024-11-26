def aritmetikuli(numbers):
    if not numbers:  
        
        raise ValueError("The list is empty. Cannot compute the mean.")
    return sum(numbers) / len(numbers)



result = aritmetikuli([32, 22, 312, 4122, 333])
print(result)  