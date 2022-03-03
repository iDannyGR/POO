import java.util.Map;
import java.util.ArrayList;

class UberVan extends Car{
    Map<String, ArrayList<String, Integer>>  typeCarAcepted;
    ArrayList<String> seatsMaterial;

    public UberVan(String license, Account driver,Map<String, ArrayList<String, Integer>>  typeCarAcepted, ArrayList<String> seatsMaterial ){
        super(license, driver);
        this.typeCarAcepted = typeCarAcepted;
        this.seatsMaterial= seatsMaterial;
    }
}
