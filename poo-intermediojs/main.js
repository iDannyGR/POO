const dany = {
    name: "jorge",
    age:32,
    approvedCourses: ['curso 1'],
    addcourse(newcourse){
        console.log("this", this)
        console.log("this.aprovecourses" , this.approvedCourses)
        this.approvedCourses.push(newcourse)
    }
};


// console.log(Object.keys(dany));
// console.log(Object.getOwnPropertyNames(dany));
// console.log(Object.entries(dany));

// Object.defineProperty(dany, "navigator", {
//     value: "crhome",
//     writable: true,
//     enumerable: false,
//     configurable: true
// })

// Object.defineProperty(dany, "pruebanasa", {
//     value: "extraterrestres",
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// Object.defineProperty(dany, "editor", {
//     value: "VScode",
//     writable: false,
//     enumerable: true,
//     configurable: true
// })

// Object.defineProperty(dany, "terminal", {
//     value: "git bash",
//     writable: true,
//     enumerable: true,
//     configurable: false
// })

Object.seal(dany);//bloquea configurable en las props de los objetos
//Object.freeze(); //congela el objeto para evitar modifaciones

console.log(Object.getOwnPropertyDescriptors(dany));
