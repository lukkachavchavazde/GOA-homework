# შექმენით Motorcycle class'ი, 4 attribute'ით და 1 class variable'ით. class variable'მა უნდა დათვალოს რამდენი მოტოციკლეტი
#  გაკეთდა, დანარჩენი თქვენ მოიფიქრეთ, ატრიბუტები რა იქნება და ა.შ

class Motorcycle:
    motorcycle_count = 0
    
    def __init__(self, model, type_of_motorcycle, has_windshield, num_gears):
        self.model = model
        self.type_of_motorcycle = type_of_motorcycle
        self.has_windshield = has_windshield
        self.num_gears = num_gears
        Motorcycle.motorcycle_count += 1
    
    def display_info(self):
        windshield_status = "Yes" if self.has_windshield else "No"
        print(f"Model: {self.model}")
        print(f"Type: {self.type_of_motorcycle}")
        print(f"Has Windshield: {windshield_status}")
        print(f"Number of Gears: {self.num_gears}")
