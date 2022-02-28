class Main{
    public static void main(String[] args) {
        System.out.println("hola mundo");
        Car car = new Car();
        car.licence = "AMQ123";
        car.driver = "Jorge Mont";
        car.passager= 9;
        car.printDataCar();


        Car car2 = new Car();

        car2.licence ="AMQ34";
        car2.driver ="Jose Montoya";
        car2.passager = 3;
        car2.printDataCar();
       }
}