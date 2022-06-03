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


//update
const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const update = {
    id:'🥞',
    changes : {
        price: 200,
        description: 'delicius'
    }
}

const product2 = products2.findIndex(item => item.id === update.id)
    products2[product2] = {...products2[product2],
    ...update.changes}
    //con spread operator se hace una fusion de datos
console.table(products2)