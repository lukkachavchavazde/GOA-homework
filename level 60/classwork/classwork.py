# 1) შექმენით car class, მიეცით 4 ატრიბუტი და შეუქმენით 2 ფუნქცია class'ში. ამ class'ისგან შექმენით 3 ობიექტი და სამივეზე გატესტეთ ყვლა ატრიბუტის გამოტანა და მეთოდები.
# 2) შექმენით person class, მიეცით 3 ატრიბუტი და შეუქმენით 2 ფუნქცია class'ში.  ამ class'ისგან შექმენით რამდენიმე ობიექტი და პირველ ორზე გატესტეთ ყვლა ატრიბუტის გამოტანა და მეთოდები. ასევე შექმენით დამატებითი კლასის ცვლადი რომელიც დათვლის რამდენი ადამიანია ჯამში.
# 3) დაწერეთ რას ეწოდება dunder method
# 4) დაწერეთ რას ეწოდება instance variables
# 5) დაწერეთ რას ეწოდება class variables
# # 6) ახსენით რა არის blueprint

class Car:
    def __init__(self, make, model, year, color):
        self.make = make       
        self.model = model     
        self.year = year       
        self.color = color     
    
    def car_info(self):
        return f"{self.year} {self.make} {self.model} ({self.color})"

  
    def car_age(self, current_year):
        return current_year - self.year

car1 = Car("Toyota", "Corolla", 2015, "Black")
car2 = Car("BMW", "X5", 2020, "White")
car3 = Car("Audi", "A4", 2018, "Red")

print(car1.car_info()) 
print(f"Car1 Age: {car1.car_age(2024)} years")
