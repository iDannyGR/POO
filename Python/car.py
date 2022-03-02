from account import Account


class Car:
    Id          = int
    license     = str
    driver      = Account("","")
    passager    = str

    def __init__(self, license, driver):
        self.license = license
        self.driver = driver