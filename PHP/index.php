<?php
require_once("car.php");
require_once("uberX.php");
require_once("uberPool.php");
require_once("uberVan.php");
require_once("account.php");

$uberX = new UberX("CVB133", new Account("Jorge Daniel", "ADS4747"),"Tesla", "Model X");
$uberX->setPassanger(4);
$uberX->PrintCar();
echo "<br/>";
$uberV= new UberVan("OJL654", new Account("Raul Ramirez", "AND5412"), "Tesla", "Model S");
$uberV->setPassanger(6);
$uberV->PrintCar();
?>