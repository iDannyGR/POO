const numbers = [1,2,2,2,5,4,7,8,9,6,3,2,1,5,1,1,5,4,7,6,9,3];

const rta =  numbers.reduce((acc, itr)=>{
    (itr < 5) ? acc['1-4'] += 1 :
    (itr < 9) ? acc['5-8']+=1 :
    acc['9-10'] += 1;
    return acc
},{'1-4':0,'5-8':0,'9-10':0})

console.table(rta)