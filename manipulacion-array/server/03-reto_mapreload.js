function solution(array) {
 const total =   array.map(item => {
        return {...item, tax:parseInt(item.price * .19)}
    })
    return total
}; 


const clients = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
    {
      name: "Product 3",
      price: 256,
      stock: 20
    }]
console.table(clients)
console.table(solution(clients))