# 1.create account
# 2.Deposit
# 3.Withdraw
# 4.Exit

# თქვენი დავალება იქნება გააკეთოთ ბანკის სისტემა მოცემული სექციებით პითონში,რაც
#  აქამდე ისწავლეთ გააკეთეთ იმ მასალით გამოიყენეთ თქვენი მაქსიმალური ცოდნა,მერე კი ჩვენ შევამოწმეთ თუ რა 
# დონის ცოდნა გამოიყენეთ და იმის მიხედვით შეიგიმოწმებთ!!



bankacc=str(input("enter you name:"))

bankacc1=(input("enter your surname:")) 

bankacc3=(input("enter your carnd number:"))


deposit= int(input("how much money do yo nedd to deposit:"))

if deposit == deposit:
    print("you successfully deposited")


withdraw= int(input("how much money do you whant to withdraw?"))

if withdraw > deposit:
    print("you dont have enough money on your account")

if withdraw <= deposit:
    print("you successfully withdrawd ")

exit= str(input("do you whant to exit: yes;no"))

if exit == "no":
    print("okay good bye and have a great day")

elif exit == "yes":

    print("what can i help you with")






 
