def arithmetic_mean(numbers):
    if not numbers:  
        
        raise ValueError("The list is empty. Cannot compute the mean.")
    return sum(numbers) / len(numbers)



result = arithmetic_mean([1, 2, 3, 4, 5])
print(result)  