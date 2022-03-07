class Card extends Payment{
    constructor(id, numberCard, dateCard, CVC){
        super(id);
        this.numberCard = numberCard;
        this.dateCard = dateCard;
        this.CVC = CVC;
    }
}