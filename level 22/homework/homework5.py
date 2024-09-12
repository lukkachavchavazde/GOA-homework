def manual_find(text, substring):
    # Get the length of the substring to find
    sub_length = len(substring)
    
    # Iterate over each index in the text where the substring might fit
    for i in range(len(text) - sub_length + 1):
        # Check if the substring matches the slice of the text
        if text[i:i + sub_length] == substring:
            return i  # Return the starting index of the found substring
    
    return -1  # Return -1 if the substring is not found

# Testing
print(manual_find("Hello world", "world"))  # Output: 6
print(manual_find("abracadabra", "cad"))    # Output: 4
