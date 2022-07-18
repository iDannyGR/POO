window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);

function navigation(){
    console.log(location)
    
   if (location.hash.startsWith('#trends')) {
       console.log('trends') 
   } else if(location.hash.startsWith('#search=')) {
    console.log('vista de busqueda') 
   }else if(location.hash.startsWith('#movie=')) {
    console.log('Movie') 
   }else if(location.hash.startsWith('#category=')) {
    console.log('categories') 
   }else {
    console.log('Home')
   }
}