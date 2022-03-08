class Main{
    public static void main(String[] args) {
        System.out.println("hola mundo");
        Car car = new Car("AMQ123", new Account("Jorge Mont", "AND123") );
        car.passager= 9;
        car.printDataCar();


        Car car2 = new Car("AMQ34", new Account("Jose Montoya", "LJKASODI"));
        car2.passager = 3;
        car2.printDataCar();

        User user1 = new User("Daniel G", "DUI258", "f@f.com", "pajarito123");
        user1.printUser();
        
       }
}