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
        let findCourse = this.courses.indexOf(course);
        (findCourse > -1) ?
            (console.log('curso eliminado'), this.courses.splice(findCourse, 1)):
            console.log('No existe el curso que busca')
        
    }
}