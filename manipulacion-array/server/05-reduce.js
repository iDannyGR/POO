const totals = [2,5,4,7];

// let sum=0;

// for (let index = 0; index < totals.length; index++) {
//     const element = totals[index];
//     sum += element;
    
// }
// console.log(sum)

const rta = totals.reduce((sum, item) => sum+=item)
console.log(rta)