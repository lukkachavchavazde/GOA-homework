class BankAccount:
    def __init__(self, owner, initial_balance=0):
        self.owner = owner
        self.balance = initial_balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ${amount}. New balance: ${self.balance}")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self.balance}")
        elif amount > self.balance:
            print("Insufficient funds.")
        else:
            print("Withdrawal amount must be positive.")

    def get_balance(self):
        return self.balance

    def __str__(self):
        return f"Account owner: {self.owner}\nBalance: ${self.balance}"


def main():
    print("Welcome to the Bank System")

    # Create a new bank account
    owner = input("Enter the account owner's name: ")
    initial_balance = float(input("Enter the initial balance: "))
    account = BankAccount(owner, initial_balance)

    while True:
        print("\nOptions:")
        print("1: Deposit")
        print("2: Withdraw")
        print("3: Check Balance")
        print("4: Exit")

        option = input("Choose an option (1/2/3/4): ")

        if option == '1':
            amount = float(input("Enter amount to deposit: "))
            account.deposit(amount)
        elif option == '2':
            amount = float(input("Enter amount to withdraw: "))
            account.withdraw(amount)
        elif option == '3':
            print(f"Current balance: ${account.get_balance()}")
        elif option == '4':
            print("Exiting the system. Goodbye!")
            break
        else:
            print("Invalid option. Please choose again.")

if __name__ == "__main__":
    main()
