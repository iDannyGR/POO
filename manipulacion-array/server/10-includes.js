//includes devuelve si esta o no dentro del array
//includes funciona para arrays y para strings

const pets = ['cat','dog','bat'];
let ifExist = false
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'bird'){
        ifExist = true
        break
    }
    
}

console.log(ifExist)

console.log(pets.includes('cat'))