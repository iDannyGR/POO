<?php
require_once("car.php");
require_once("uberX.php");
require_once("uberPool.php");
require_once("account.php");

$uberX = new UberX("CVB133", new Account("Jorge Daniel", "ADS4747"),"Tesla", "Model X");
$uberX->PrintCar();
?>