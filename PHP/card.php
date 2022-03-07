
<?php
    require_once('payment.php');
    class Card extends Payment{
        public $cardNumber;
        public $cardDate;
        public $CVC;

        public function __construct($id,$cardNumber,$cardDate,$CVC){
            parent::__construct($id);
            $this->cardNumber = $cardNumber;
            $this->cardDate = $cardDate;
            $this->CVC = $CVC;
        }        
    }

?>