grade = int(input("enter your grade:"))
if 90 <= grade <= 100:
    grade = "grade A"
elif 80 <= grade <= 89:
    grade = "grade B"
elif 70 <= grade <= 79:
    grade = "grade C"
elif 60 <= grade <= 69:
    grade = "grade D"  
else:
    grade = "grade F"  
print(f"your score is {grade}")    