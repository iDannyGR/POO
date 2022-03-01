class Car {
    Integer Id;
    String license;
    Account driver;
    Integer passager;
    
    public Car(String license,Account driver ){
        this.license = license;
        this.driver = driver;
    }

    void printDataCar(){
        System.out.println("Licence: " + license + "Name Driver: " + driver.name);
    }
}