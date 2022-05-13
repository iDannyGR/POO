// ---- Module Pattern y Namespace propiedades privadas ---- //
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
    changeName(newName){
        private['_name'] = newName;
    },
    showName(){
        return private['_name']
    }
  }
  //proteger metodos para uqe no se pueda editar en consola
  Object.defineProperty(public, 'showName', {
      configurable: false,
      writable: false
  })
  Object.defineProperty(public, 'changeName', {
    configurable: false,
    writable: false
})
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