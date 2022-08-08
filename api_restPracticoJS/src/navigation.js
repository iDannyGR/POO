//import and executing firts events 
import {getCategoriesPreview, fillMovies} from './axios.js'
import * as variables from './nodes.js';
window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);
variables.searchButton.addEventListener('click', ()=>{ // adding and event click to global search button 
    location.hash=`#search=${variables.searchForm.value}`;
} )

//the navigation !!!!
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


//executing funtions when the users selected a sections or movies
function homePage(){
    console.log('Home')
    fillMovies('/trending/movie/day', variables.allTreding)
    getCategoriesPreview()
    variables.categoriesContainer.classList.remove('inactive')
    variables.trendingMoviesContainer.classList.remove('inactive')
    variables.movieSelected.classList.add('inactive')
}

function categoriesPage(){
    variables.categorySelected.classList.remove('inactive')
    variables.categoriesContainer.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.movieSelected.classList.add('inactive')
    
    const [_, categoryData]= location.hash.split('=') //['#category', 'id-name'] /show movies by category selected
    const [categoryId, categoryName] = categoryData.split('-')
    
    fillMovies('discover/movie', variables.activeCategorySelected, {
        params:{
            with_genres: categoryId}
        })
    variables.titleArea.innerHTML = categoryName
}

function searchPage(){
    console.log('vista de busqueda') 
    variables.movieSelected.classList.add('inactive')
    variables.categoriesContainer.classList.add('inactive')
    variables.categorySelected.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.searchContainer.classList.remove('inactive')

    const [_ , searchData] = location.hash.split('=')
}

function trendsPages(){
    console.log('trends') 

}

function movieDetails(){
    console.log('Movie') 
    variables.movieSelected.classList.remove('inactive')

    variables.categoriesContainer.classList.add('inactive')
    variables.categorySelected.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')

}
