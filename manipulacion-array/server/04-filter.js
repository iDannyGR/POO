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
}
]

const rta2 = orders.filter(item => item.delivered && item.total>=200)
console.table(rta2)