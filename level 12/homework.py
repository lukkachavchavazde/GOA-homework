import random

correct_answer = random.randint(1,6)
guess = None
while guess != correct_answer:
    guess = int(input("guess the dice roll (1,6):"))

    if guess == correct_answer:
        print("its correct")
    else:
        print("its incorrect")
print(f"the correct number was {correct_answer}")         



