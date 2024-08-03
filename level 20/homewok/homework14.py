def alternate_upper(string):
    result = ""
    for i in range(len(string)):
        if i % 2 == 0:
            result += string[i].upper()
        else:
            result += string[i].lower()
    return result

test_case = "hello"
print(alternate_upper(test_case))