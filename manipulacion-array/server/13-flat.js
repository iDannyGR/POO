//flat aplana en teoria los array multinivel en una sola linea 

const matriz = [
    [1,2,3],
    [4,5,6,[1,2,[1,1]]],
    [7,8,9]
]
const newArr = [];
 for (let i = 0; i < matriz.length; i++) {
     const array = matriz[i];
     for (let j = 0; j < array.length; j++) {
         const element = matriz[i][j];
         newArr.push(element)
         
     }
     
 }
const newArr2 = matriz.flat(3);//el numero son los niveles de profudidad
//del array/objeto

 console.table(newArr)
 console.table(newArr2)