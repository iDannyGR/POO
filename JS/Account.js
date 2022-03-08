class Account {
    constructor(name,document, email, password){
        this.id;
        this.name = name;
        this.document = document;
        this.email = email;
        this.password = password;

    }
     printUser(){
         console.log("the user is: "+this.name);
         console.log("the document is: "+this.document);
         console.log("the email is: "+this.email);
         console.log("the password is: "+this.password);
     }
}