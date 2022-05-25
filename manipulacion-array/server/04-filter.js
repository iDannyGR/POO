const words = ['spray','limit','elite','ehuberant'];


const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
     if(element.length >= 6){
        newArray.push(element)
     }
}

console.table(newArray);
console.table(words);

const rta = words.filter(item => item.length >= 6)
console.table(rta)



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
},{
    customerName :'Petter',
    total:500,
    delivered: true
},{
    customerName :'SOmaira',
    total:201,
    delivered: true
}
]

const rta2 = orders.filter(item => item.delivered && item.total>=200)
console.table(rta2);

//una funcion flecha que recibe un parametro y realiza busqueda
//para buscar coincidencias si tiviera mas parametros de nombre con ||
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query) 
    })
}

console.table(search('Mar'))