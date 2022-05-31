const dateFn = require('date-fns/areIntervalsOverlapping')
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

const orders = [{
    customerName :'Daniel',
    total:60,
    delivered: true
},{
    customerName :'Marvin',
    total:220,
    delivered: false
},{
    customerName :'Santiago',
    total:180,
    delivered: true
},{
    customerName :'Petter',
    total:500,
    delivered: true
},{
    customerName :'SOmaira',
    total:201,
    delivered: true
}
]

const rta3 = orders.some(item => item.delivered)
console.log(rta3)



const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
      startDate: new Date(2021, 1, 1, 19),
      endDate : new Date(2021, 1, 1,20, 30)
  }
const isOverlap = (newDate)=>{
    return dates.some(date=>{
        return dateFn (
            {start:date.startDate, end:date.endDate})
            {start:newDate.startDate, end:newDate.endDate}
    })
}