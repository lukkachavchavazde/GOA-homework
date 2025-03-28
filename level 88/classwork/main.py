def whatday(num):
    # dictionary mapping numbers (as strings) to weekdays
    weekdays = {
        "1": "Sunday",
        "2": "Monday",
        "3": "Tuesday",
        "4": "Wednesday",
        "5": "Thursday",
        "6": "Friday",
        "7": "Saturday"
    }

    # check if num is beetwin 1 to 7
    if num in range(1, 8):
        # convert num to  string to match dictionary keys and return  corresponding day
        return weekdays[f"{num}"]
    else:
        # inf num is out of rang return  error message
        return "Wrong, please enter a number between 1 and 7"

# Calling the function with 5
print(whatday(5))   









def distinct(seq):
    # create empty list to store unique numbers
    listn = []
    
    # go through each number in the inp list
    for i in seq:
        # if number is already in listn pass
        if i in listn:
            pass
        else:
            # if number is not in listn add it in thr listn
            listn.append(i)

    # return the unique numbers
    return listn

# test the function with a list that has duplicate numbers
print(distinct([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7]))








# define the function position which takes an alphabet as input
def position(alphabet):
    # create a string of all lowercase letters
    alphabet1 = "abcdefghijklmnopqrstuvwxyz"
    
    # find the index of the given alphabet in alphabet1, add 1 to make the position start from 1
    return f"position of alphabet: {alphabet1.find(alphabet) + 1}"

# calling the function with 'f' as input and printing the result
print(position("f"))


def to_alternating_case(string):
    res = ""  # initialize an empty string to hold the result

    for i in string:  # iterate through each character in the string
        if i.islower():  # check if the character is lowercase
            res += i.upper()  # convert it to uppercase and add to result string
        else:
            res += i.lower()  # convert it to lowercase and add to result string

    return res  # return the final string with alternating case

print(to_alternating_case("altERnaTIng cAsE"))  # Output: ALTerNaTiNG CaSe
