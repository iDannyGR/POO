export default class Student {
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

