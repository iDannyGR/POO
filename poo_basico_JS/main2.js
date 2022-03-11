class learningPath{
    constructor({
        name,
        courses =[]
    }){
        this.name = name;
        this.courses = courses;
    }
    addCourse(course){
        this.courses.push(course);
    }
    deleteCourse(course){
        let findCourse = this.courses.find(course);
        (findCourse) ?
        this.courses.pop(course):
        console.log('Curso no encontrado no existe en la ruta');
    }


}

const desarrolloWeb = new learningPath({
    name: 'escuela de desarrollo web',
    courses: ['curso1', 'curso 2','curso 3']
})

const disDigital = new learningPath({
    name: 'escuela de diseño web',
    courses:['photoshop basico','diagrmas ','UML']
})

class Student {
    constructor({
        name,
        email,
        user,
        facebook,
        twitter,
        instagram,
        aproveCourse = [],
        learningPath =[]
    }){
        this.name= name,
        this.email=email,
        this.user=user,
        this.socialmedia = {twitter, instagram, facebook},
        this.aproveCourse = aproveCourse,
        this.learningPath = learningPath}
}

const Juan2 = new Student({
    name:"Jorge Dcx",
    user: 'ing.jdrivera',
    email:'ing.jdrivera@gmail.com',
    facebook:'whitefox',
    learningPath : [desarrolloWeb, disDigital]
})

