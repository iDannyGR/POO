class Car{
      constructor(license, driver){
        this.id;
        this.license = license;
        this.driver = driver;
        this._passengers;
    };

    get Passanger(){
       return this._passengers;
   } 

    set Passanger(passenger){
        if(passenger == 4){
            this._passengers = passenger;
        }else{
            console.log("Necesitas 4 pasajeros");
        }
   }
   printDataCar() {
    console.group(this.id)
    console.log('License: ' + this.license)
    console.log('Nombre: ' + this.driver.name)
    console.log('DNI: ' + this.driver.document)
    console.log('Pasajeros: ' + this._passenger)
    console.groupEnd()
  }

}