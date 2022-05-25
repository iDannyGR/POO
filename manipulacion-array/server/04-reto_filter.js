function solution (array, size){
  const  rta = array.filter(item =>{
        return item.length >= size;
    })
    return rta
}

console.table(solution(['amor', 'sol', 'piedra', 'día'], 4));