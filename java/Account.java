class Account {
    Integer id;
    String name;
    String document;
    String email;
    String password;

    public Account(String name, String document){
        this.name = name;
        this.document = document;
    }

  
    void printUser(){
      System.out.println("User: "+name+" document: "+document+" email: "+email+" password: "+password);  
  }
}