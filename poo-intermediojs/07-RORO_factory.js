// ---- factory pattern y RORO ---- //
function validateStudent(data){
    throw new Error( data +  "nombre y email obligatorios")
}

function createStudent ({ 
    name = validateStudent("name"),
    email= validateStudent("email"),
    age,
    twitter,
    facebook,
    instagram,
    approveCourses = [],
    learningPaths = []
}= {}){
  
     return {
        name,
        email,
        age,
        approveCourses,
        learningPaths,
        socialMedia: {twitter, facebook,instagram}        
     };
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