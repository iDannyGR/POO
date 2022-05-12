const obj1 = {
    a : "a",
    b : "b",
    c : {
        d : "d",
        e : "e"
    },
    editA(){
        this.a = "AAAAAAAAAAAAA"
    }
}

const obj2 = JSON.stringify(obj1);
const obj3= JSON.parse(obj2);