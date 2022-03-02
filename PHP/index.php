<?php
require_once("Account.php");
require_once("Car.php");

$car = new Car("NAND451", new Account("Jorge Daniel", "JLK4141"));
$car->PrintCar();
?>