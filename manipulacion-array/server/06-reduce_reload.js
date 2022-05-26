const items = [1,3,2,3,1,52];

const rta = items.reduce((obj, item)=> {
    (!obj[item]) ?
     obj[item] =1:
     obj[item] = obj[item]+1
     return obj
},{})


console.log(rta)



const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];
//con map recorremos el level y por cada iteraccion busca el valor del nivel
// con reduce si se repite lo almacena en un array la cantidad de veces
// y lo retorna en un unico objeto
  const rta2 = data
  .map(item => item.level)
  .reduce((obj, item)=> {
    (!obj[item]) ?
     obj[item] =1:
     obj[item] = obj[item]+1
     return obj
},{})

console.table(rta2)