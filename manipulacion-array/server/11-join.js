//unir arrays

const elements = ['fire','water','air']
let rta = ''
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rta = rta + element + separator
}

console.log(rta)

const rta2 = elements.join('--')
console.log(rta2)

const title = 'Curso de manipulacion de arrays';

let rta3=title.split(' ').join('-').toLowerCase();
console.table(rta3)