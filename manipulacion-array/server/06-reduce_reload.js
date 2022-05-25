const items = [1,3,2,3];

const rta = items.reduce((obj, item)=> {
    (!obj[item]) ?
     obj[item] =1:
     obj[item] = obj[item]+1
     return obj
},{})


console.log(rta)