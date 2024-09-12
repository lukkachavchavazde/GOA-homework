def remove_duplicates(lst):
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            result.append(item)
            seen.add(item)
    return result


input_list = [1, 2, 3, 1]
output_list = remove_duplicates(input_list)
print(output_list)