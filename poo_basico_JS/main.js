
const cursoProgBasica= new Course({name: "curso gratis de programacion basica"})
const curso1 = new Course({name: "Curso definitivo de HTML"})
const photoshop =  new Course({name: "photoshop basico"})

const desarrolloWeb = new learningPath({
    name: 'escuela de desarrollo web',
    courses: [cursoProgBasica,curso1,photoshop]
})

const disDigital = new learningPath({
    name: 'escuela de diseño web',
    courses:['photoshop basico','diagrmas ','UML']
})

const Juan2 = new Student({
    name:"Jorge Dcx",
    user: 'ing.jdrivera',
    email:'ing.jdrivera@gmail.com',
    facebook:'whitefox',
    learningPath : [desarrolloWeb, disDigital]
})

