public class Card extends Payment{
    Integer numberCard;
    String DateCard;
    String svc;

    public Card(Integer id, Integer numberCard, String DateCard, String svc){
            super(id);
            this.numberCard = numberCard;
            this.DateCard = DateCard;
            this.svc = svc;
    }
}
