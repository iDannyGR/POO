// borrar un objeto sin modiicar el objeto original con filter

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myItem =  products.filter(item => item.id != '🍔')

console.log("products", products);
console.log("myProducts", myItem);
console.log("-".repeat(10));


// modificar un item sin modificar el array original  
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

const findProduct = products2.findIndex(item => item.id === update.id)
const newListProducts = [...products2];
newListProducts[findProduct] = {...products2[findProduct],...update.changes}
console.table(products2)
console.table(newListProducts)