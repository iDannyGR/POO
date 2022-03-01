class Car{

    constructor(license, driver){
        this.id;
        this.licence = license;
        this.driver = driver;
        this.passager;
    };

     printCar() {
    console.log(this.driver);
    console.log(this.driver.name);
    console.log(this.driver.document);
    }

}