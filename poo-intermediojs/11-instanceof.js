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
    // const private = {
    //     "_name" : name,
    //     "_courses" : courses,
    // }
//     const public = {
//         get name (){
//             return private['_name']
//         },
//         set name (newName){
//             if(newName.length != 0){
//                 private['_name'] = newName;
//             } else {console.warn('tu nombre debe tener al menos un caracter')}       
//         },
//         get courses (){
//             return private['_courses']
//         }
//     }

//     return public
// }

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
     



// //variables privadas funciona como setter y getter
//   const private = {
//       "_name" : name,
//       "_learningPaths": learningPaths,
//   }
//variables publicas que se puede editar 
//   const public = {
//     email,
//     age,
//     approveCourses,
//     socialMedia: {twitter, facebook,instagram},
//     get name (){
//         return private['_name']
//     },
//     set name (newName){
//         if(newName.length != 0){
//             private['_name'] = newName;
//         } else {console.warn('tu nombre debe tener al menos un caracter')}       
//     },get learningPaths (){
//         return private['_learningPatch']
//     },set learningPaths (newLP){ 
//         if(!newLP.name){
//             console.warn('Tu LP no tiene la propiedad name');
//             return;
//         }
//         if(!newLP.courses){
//             console.warn("tus LP no tiene courses")
//         return; 
//         }
//         if(!isArray(newLP.courses)){
//                 console.warn("tus LP no es una lista de cursos")
//                 return;
//         }

//         private["_learningPaths"].push(newLP);
        
//     }
        
    
//   }

// //retornamos public
//      return public     
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
