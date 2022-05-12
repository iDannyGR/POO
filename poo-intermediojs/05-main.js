// ---- Deep Copy ---- //
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