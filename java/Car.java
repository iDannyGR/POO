class Car {
    private Integer Id;
    private String license;
    private Account driver;
    private Integer passanger;
    
    public Car(String license,Account driver ){
        this.license = license;
        this.driver = driver;
        }

    void printDataCar(){
        if(passanger != null){
            System.out.println("License: " + license + " Name Driver: " + driver.name + " Passengers: " + passanger);
        }
    }

    public Integer getPassager(){
        return passanger;
    }

    public void setPassager(Integer passager){
       if(passager == 4){
            this.passanger = passager;
        }else{
        System.out.println("necesitas asignar 4 pasajeros");}
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Account getDriver() {
        return driver;
    }

    public void setDriver(Account driver) {
        this.driver = driver;
    }

}