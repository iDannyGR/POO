function solution(array) {
    array.map(item => {
        return {...item, tax:item.price * .19}
    })
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
    }]

console.table(solution(clients))