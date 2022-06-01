//find devuelve directamente un objeto que cumple la condicion
//si hay mas de un elemento que coincida solo envia el primero
//si no encuentra ninguno devuelve undefined
// findindex devuelve la posicion y si no lo encuentra retorna un -1

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



const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const rta3 = products.find(item => item.id ==='🍔')
  console.log(rta3)
  const rta4 = products.findIndex(item => item.id ==='🍔')
  console.log(rta4)