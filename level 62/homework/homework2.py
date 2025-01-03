class MyClass:
    def __init__(self):
        self._level_1_hidden = 10 
    def show_value(self):
        print(self._level_1_hidden)


obj = MyClass()
obj.show_value()
print(obj._level_1_hidden)  



class MyClass:
    def __init__(self):
        self.__level_2_hidden = 20 
    def show_value(self):
        print(self.__level_2_hidden)


obj = MyClass()
obj.show_value() 

print(obj._MyClass__level_2_hidden)  