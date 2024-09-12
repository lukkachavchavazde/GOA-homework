def manual_replace(text, old, new):
    result = ""  
    old_length = len(old)  #
    
    i = 0 
    while i < len(text):
       
        if text[i:i+old_length] == old:
            result += new  
            i += old_length  
        else:
            result += text[i]  
            i += 1 
    
    return result


print(manual_replace("luka", "saba", "gio"))  
        
