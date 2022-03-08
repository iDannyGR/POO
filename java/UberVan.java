import java.util.Map;
import java.util.ArrayList;

class UberVan extends Car{
    Map<String, Map<String, Integer>>  typeCarAcepted;
    ArrayList<String> seatsMaterial;
    private Integer passanger;

    public UberVan(String license, Account driver){
        super(license, driver);
      
    }

    @Override
    public void setPassager(Integer passager) {
        if(passager == 6){
            this.passanger = passager;
        }else{
        System.out.println("necesitas asignar 4 pasajeros");}
        
    }
}
