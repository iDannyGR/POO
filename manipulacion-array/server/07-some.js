const numbers = [1,2,3,4]
let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
   if(element%2 === 0) {
        rta = true;
    break;}

}
console.log(rta)

let rta2 = numbers.some(element => element % 2 === 0)

console.log(rta2)