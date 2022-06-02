//unir arrays

const elements = ['fire','water','air']
let rta = ''
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rta = rta + element + separator
}

console.log(rta)