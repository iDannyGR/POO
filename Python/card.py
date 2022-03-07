from payment import Payment

class card(Payment):
    cardNumber = int
    cardDate = int
    CVC = str

    def __init__(self, id, cardNumber, cardDate, CVC):
        super().__init__(id)
        self.cardNumber = cardNumber
        self.cardDate = cardDate
        self.CVC = CVC
