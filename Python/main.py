from car import Car
from account import Account

if __name__ == "__main__":
    print("HOla Mundo")
    car = Car("AMS123", Account("Jorge Daniel","45215DF"))
    print(vars(car))
    print(vars(car.driver))
    