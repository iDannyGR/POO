import {getCategoriesPreview, getTrendingMoviesPreview} from './axios.js'
window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);

function navigation(){
    console.log({location})
    
   if (location.hash.startsWith('#trends')) {
       trendsPages()
   } else if(location.hash.startsWith('#search=')) {
        searchPage()
   }else if(location.hash.startsWith('#movie=')) {
     movieDetails()
   }else if(location.hash.startsWith('#category=')) {
     categoriesPage()
   }else {
    homePage()
    
   }
}

function homePage(){
    console.log('Home')
    getTrendingMoviesPreview()
    getCategoriesPreview()
}
function categoriesPage(){
    console.log('categories') 
}
function searchPage(){
    console.log('vista de busqueda') 
}
function trendsPages(){
    console.log('trends') 
}
function movieDetails(){
    console.log('Movie') 
}
