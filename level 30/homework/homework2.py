
cars = {
    'car1': {
        'make': 'Toyota',
        'model': 'Camry',
        'year': 2022,
        'price': '$25,000'
    },
    'car2': {
        'make': 'Honda',
        'model': 'Civic',
        'year': 2021,
        'price': '$22,000'
    },
    'car3': {
        'make': 'Ford',
        'model': 'Mustang',
        'year': 2023,
        'price': '$30,000'
    }
}



for car_key, car_info in cars.items():
    print(f"--- Car {car_key[-1]} ---")
    print(f"Make: {car_info['make']}")
    print(f"Model: {car_info['model']}")
    print(f"Year: {car_info['year']}")
    print(f"Price: {car_info['price']}")
    print()
    
