from car import Car

class UberVan(Car):
    typeCarAcepted = []
    seatsMaterial = []

    def __init__(self, license, driver, typeCarAcepted, seatsMaterial):
        super().__init__(license, driver)
        self.typeCarAcepted = typeCarAcepted
        self.seatsMaterial = seatsMaterial
