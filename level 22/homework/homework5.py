def manual_find(text, substring):
   
    sub_length = len(substring)
    
    for i in range(len(text) - sub_length + 1):
      
        if text[i:i + sub_length] == substring:
            return i
    
    return -1  


print(manual_find("Hello world", "world"))  
print(manual_find("abracadabra", "cad"))    
