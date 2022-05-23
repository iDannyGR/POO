// ---- Instance Of ---- //
// ---- Duck typing ---- //
function validateParam(data){
    throw new Error( data +  "dato obligatorio")
}

// -- funciones evaluadoras -- //
function isObject(eval){
    return typeof eval == "object";
}

function isArray(eval){
    return Array.isArray(eval);
}
// -- -- //



function LeaningPatch({
    name= validateParam("name"),
    courses= [], 
}){
    this.name = name;
    this.courses = courses;
}


function Student ({ 
    name = validateParam("name"),
    email= validateParam("email"),
    age,
    twitter,
    facebook,
    instagram,
    approveCourses = [],
    learningPaths = []          
}= {}){

    this.name = name;
    this.email = email;
    this.age = age;
    this.approveCourses = approveCourses
    this.socialMedia = {twitter, facebook, instagram};
    if(isArray(learningPaths)){
        this.learningPaths= []

        for(lPath of learningPaths){
              if(lPath instanceof LeaningPatch){
                this.learningPaths.push(lPath)
            }
        }


      }
      Object.defineProperty(Student.prototype,"learningPatch", {
        get(){
            return this.learningPaths
        },
        set(){}
    } )
      

}


const escuelaWeb = new LeaningPatch({name: "escuela de desarrollo"})
const dataScience = new LeaningPatch({name: "escuela de data Science"})
const dany = new Student({
    name: "daniel",
    age: 32,
    email: 'a@a',
    learningPaths: [
        escuelaWeb,
        dataScience,
        {
            name: "impostor",
            courses: [],
        }
    ],
 })
