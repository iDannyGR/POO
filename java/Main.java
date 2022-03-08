class Main{
    public static void main(String[] args) {
        System.out.println("hola mundo");
        UberX uberX = new UberX("AMQ123", new Account("Jorge Mont", "AND123", "a", "pajarito12"), "Tesla", "model X");
        uberX.setPassager(4);
        uberX.printDataCar();
  
        UberVan uVan = new UberVan("FGU121", new Account("Andres herrera", "AND52", "a", "pajarito12" ));
        uVan.setPassager(6);
        uVan.printDataCar();

        // Car car2 = new Car("AMQ34", new Account("Jose Montoya", "LJKASODI", "som@sombol.com", "Pajroazul"));
        // // car2.passager = 3;
        // car2.printDataCar();
              
       }
}
