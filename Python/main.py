from car import Car

if __name__ == "__main__":
    print("HOla Mundo")
    car = Car()
    car.licence="AMS2354"
    car.driver = "JOrge Daniel"
    car.passager = 2
    print(vars(car))

    car2 = Car()
    car2.licence="MSSM14"
    car2.driver="mendez Pajaro"
    car2.passager= 34
    print(vars(car2))