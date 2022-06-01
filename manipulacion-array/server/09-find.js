//find devuelve directamente un objeto que cumple la condicion
//si hay mas de un elemento que coincida solo envia el primero
//si no encuentra ninguno devuelve undefined

const numbers = [1,25,36,85,41,7,20,30]

let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
     if(element === 30){
         rta = element;
         break
     }
}

console.log(rta)

let rta2 = numbers.find(number => number === 30)

console.log(rta2)