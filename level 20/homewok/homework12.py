
def check_divisibility():
    number = int(input("შეიყვანეთ რიცხვი: "))
    if number % 3 == 0 or number % 5 == 0:
        print(f"{number} იყოფა 3-ზე  5-ზე ან ორივეზე.")
    else:
        print(f"{number} არ იყოფა 3-ზე ან 5-ზე.")

check_divisibility()