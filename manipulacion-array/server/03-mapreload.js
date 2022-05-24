const orders = [{
    customerName :'Daniel',
    total:60,
    delivered: true
},{
    customerName :'Marvin',
    total:220,
    delivered: false
},{
    customerName :'Santiago',
    total:180,
    delivered: true
}
]

 const rta = orders.map(item => item.total)
 console.table (rta)

//AÑADIR UN ELEMENTO MAS AL ARRAY
//  const rta2 = orders.map(item => {
//      item.tax =.19;
//      return item;
//  })
//  console.table(orders)
//  console.table(rta2)

//sin modificar el objeto en memoria
 const rta3 = orders.map(item => {return {...item, tax:.19};})
console.table(orders)
console.table(rta3)