// borrar un objeto sin modiicar el objeto original con filter

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const myProducts=[];
const product =  products.findIndex(item => item.id === '🍔');
    (product !== -1)?
  myProducts = products.filter:
    console.log('not found');

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


// modificar un item sin modificar el array original  
