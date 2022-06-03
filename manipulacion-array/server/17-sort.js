//sort es un metodo mutable y cambia el array original
//sort ordena  por el codigo ASCII
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.table(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a-b); //si se quiere inverso solo se cambia b -a
console.table(numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort((a,b)=> a.localeCompare(b)); //localcompare navegador viejito
console.table(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a,b)=> a.total - b.total);
console.table(orders)