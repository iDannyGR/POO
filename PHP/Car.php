<?php
    class Car{
        public $id;
        public $license;
        public $driver;
        public $passagers;
        
        public function __construct($license, $driver){
            $this->license = $licence;
            $this->driver = $driver;
        }
        public function PrintCar(){
        echo "license: {$this->licence}, conductor: {$this->driver->name}, document: {$this->driver->document}";
        } 


        }
    
?>