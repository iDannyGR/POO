const  letter = ['a','b','c'];

for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    console.table('recorrer con for ' + element);
}

letter.forEach(element => console.log('recrrer con forearch '+ element))