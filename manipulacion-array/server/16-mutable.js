const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

const product =  products.findIndex(item => item.id === '🍔');
console.log(product);
    (product !== -1)?
    myProducts.push(products[product]) && (products.splice(product, 1)):
    console.log('not found');

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


