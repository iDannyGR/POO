//import and executing firts events 
import {getCategoriesPreview, getMovies, getMovieById} from './axios.js'
import * as variables from './nodes.js';
window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);
variables.searchButton.addEventListener('click', ()=>{ // adding and event click to global search button 
    location.hash=`#search=${variables.searchForm.value.trim('')}`;
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
    getMovies('/trending/movie/day', variables.allTreding)
    getCategoriesPreview('/genre/movie/list', variables.categoryList)

    variables.categoriesContainer.classList.remove('inactive')
    variables.trendingMoviesContainer.classList.remove('inactive')
    variables.movieSelected.classList.add('inactive')
    variables.searchMoviesContainer.classList.add('inactive')
    variables.categorySelected.classList.add('inactive')
}

function categoriesPage(){
    variables.categorySelected.classList.remove('inactive')
    variables.categoriesContainer.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.movieSelected.classList.add('inactive')
    
    const [_, categoryData]= location.hash.split('=') //['#category', 'id-name'] /show movies by category selected
    const [categoryId, categoryName] = categoryData.split('-')
    
    getMovies('discover/movie', variables.activeCategorySelected, {
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
    variables.searchMoviesContainer.classList.remove('inactive')
   
    //catch the url search and split for send the query 
    const [_ , query] = location.hash.split('=')
    getMovies( 'search/movie', variables.searchContainer ,{params:{query}})

      //add history search to arrow button in search page
      variables.backButton.addEventListener('click', ()=> {
        window.history.back();
    })
}

function trendsPages(){
    console.log('trends') 

}

function movieDetails(){
    window.scrollTo = (0, 0)
    console.log('Movie') 
    variables.movieSelected.classList.remove('inactive')
    variables.categoriesContainer.classList.add('inactive')
    variables.categorySelected.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.searchMoviesContainer.classList.add('inactive')
        const [_ , idMovieData] = location.hash.split('=')
    getMovieById(idMovieData, variables.movieContainer1 )
    getMovies(`/movie/${idMovieData}/similar`, variables.relatedMoviesScrollContainer)
}
//[variables.movieDetailTitle, variables.movieDetailScore, variables.movieDetailDescription, variables.imgMovieDetails, variables.movieRelatedCategory]