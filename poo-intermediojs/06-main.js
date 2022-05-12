// ---- abstraccion con literal object y deep copy ---- //

// -- funciones evaluadoras -- //
function isObject(eval){
    return typeof eval == "object";
}

function isArray(eval){
    return Array.isArray(eval);
}
// -- -- //

function deepcopy (eval){
     let evalcopy;
     const evalArray = isArray(eval);
     const evalObj = isObject(eval)

     if(evalArray){
         evalcopy = [];
     }else if (evalObj){
         evalcopy = {};
     }else{ return eval}

for(key in eval){
     const keyIsOBject = isObject(eval[key])
     if(keyIsOBject){
         evalcopy[key] = deepcopy(key);
     }else{
         if(evalArray){
             evalcopy.push(eval[key])
         }else{
             evalcopy[key] = eval[key]
         }
     }
}
 return evalcopy    
}


const student = {
    name: undefined,
    email: undefined,
    age: undefined,
    aprrovecurse: undefined,
    learningPachs: undefined, 
    socialMedia: {twitter: undefined, instagram: undefined, facebook: undefined}
};

const dany = deepcopy(student)
Object.seal(dany)
// Object.defineProperty(dany, "name", {
//     value:"Daniel",
//     configurable: false,
// })
Object.isSealed() //para verificar 
Object.isFrozen() //lo mismo de arriba 
