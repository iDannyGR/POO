<?php
    require_once('account.php');
    class Car{
        public $id;
        public $license;
        public $driver;
        protected $passagers;
        
        public function __construct($license, $driver){
            $this->license = $license;
            $this->driver = $driver;
        }
        public function PrintCar(){
          echo "license: {$this->license}, conductor: {$this->driver->name}, document: {$this->driver->document}, passanger: {$this->passagers}";
        } 
    
    
    public function getPassager(){
        return $this->passagers;
    }

    public function setPassanger($passagers){
        if($passagers == 4){
            $this->passagers =$passagers;
        }else{echo "Necesitas 4 pasajeros ";}
    }
}
    
?>