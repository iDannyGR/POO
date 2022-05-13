// ---- Duck typing ---- //
function validateParam(data){
    throw new Error( data +  "dato obligatorio")
}
function createLeaningPatch({
    name= validateParam("name"),
    courses: [], 
}){
    const private = {
        "_name" : name,
        "_courses" : courses,
    }
    const public = {
        get name (){
            return private['_name']
        },
        set name (newName){
            if(newName.length != 0){
                private['_name'] = newName;
            } else {console.warn('tu nombre debe tener al menos un caracter')}       
        },
        get courses (){
            return private['_courses']
        }
    }

    return public
}

function createStudent ({ 
    name = validateParam("name"),
    email= validateParam("email"),
    age,
    twitter,
    facebook,
    instagram,
    approveCourses = [],
    learningPaths = []          
}= {}){
//variables privadas funciona como setter y getter
  const private = {
      "_name" : name
  }
//variables publicas que se puede editar 
  const public = {
    email,
    age,
    approveCourses,
    learningPaths,
    socialMedia: {twitter, facebook,instagram},
    get name (){
        return private['_name']
    },
    set name (newName){
        if(newName.length != 0){
            private['_name'] = newName;
        } else {console.warn('tu nombre debe tener al menos un caracter')}       
    },
  }

//retornamos public
     return public     
}



const dany =createStudent({
    name: "daniel",
    age: 32,
    email: "a@a",
    twitter: "n/a",
    facebook:"/whitecat",
    instagram:"foxdani",
    learningPaths: "Aplicaciones Web",
    approveCourses:  ["javascript basico", "JS intermedio"]
})