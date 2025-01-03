function Computer(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  const myComputer = new Computer('Apple', 'MacBook Pro', 2023);
  console.log(myComputer);



  function Keyboard(brand, type, layout) {}
    this.brand = brand;
    this.type = type; 
    this.layout = layout;  
  
  const myKeyboard = new Keyboard('Logitech', 'mechanical', 'QWERTY');
  console.log(myKeyboard);



  function Bus(brand, capacity, route) {
    this.brand = brand;
    this.capacity = capacity;  
    this.route = route;  
  }
  
  const myBus = new Bus('Mercedes', 50, 'Tbilisi - Batumi');
  console.log(myBus);
  
  
  