public class Paypal extends Payment {
        String Email;
    
        public Paypal(Integer id, String Email){
            super(id);
            this.Email = Email;
        }
}
