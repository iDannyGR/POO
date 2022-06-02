const elements = [1,1,1,5,1];
const otherElement = [3,3,4,4,5]

const newArr= [...elements];

for (let index = 0; index < otherElement.length; index++) {
    const element = otherElement[index];
    newArr.push(otherElement[index])
    
}
const rta =elements.concat(otherElement)
const rta2 = [...elements ,...otherElement] //concat con spread operator
const rta3 = [...elements, ...'culos'] //manupla el string para hacerlo array
console.table(newArr)
console.table(rta)
console.table(rta2)
console.table(rta3)
elements.push(...otherElement)
console.log('con push')
console.table(elements)

// el spread operator ... sirve para array como para objetos y evita la referencia
//en memoria