<?php
require_once('car.php');
    class UberVan extends Car{
        public $typeCarAccepted;
        public $seatMaterial;

        public function __construct($license, $driver, $typeCarAccepted, $seatMaterial){
            parent::__construct($license, $driver);
            $this->typeCarAccepted=$typeCarAccepted;
            $this->seatMaterial=$seatMaterial;
        }

        public function setPassanger($passenger){
            if($passenger==6){
                $this->passagers = $passenger;
            }else{
                echo "necesitas asignar 6 pasajeros";
            }
        }
    }       
   ?>