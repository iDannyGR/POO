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
        this.learningPath = learningPath
    }

    addPath(path){
        this.learningPath.push(path);
    }

    deletePath(path){
        let findPath = this.learningPath.indexOf(path);
        (findPath > -1) ?
            (console.log('Ruta eliminada'), this.learningPath.splice(findPath, 1)):
            console.log('No se a agregado es ruta de aprendizaje')
        
    }
}

