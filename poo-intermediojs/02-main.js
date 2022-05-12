// ---- shallow copy ---- //
const obj1 = {
    a : "a",
    b : "b",
    c : {
        d : "d",
        e : "e"
    }
}

const obj2 = {}; //se trabaja con objetos y usaremos algo ya asignado
                // por eso podemos usar const 

for(prop in obj1){
    obj2[prop] = obj1[prop]
}


const obj3 = Object.assign({}, obj1); //tiene el mismo problema de shallow copy
const obj4 = Object.create(obj1) //funciona pero si hay nested object tambien falla
                                    // y si se cambia el objeto original afecta al nuevo

