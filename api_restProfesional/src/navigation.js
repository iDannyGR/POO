//import and executing firts events 
import {getCategoriesPreview, getMovies, getMovieById, trendsMovies} from './axios.js'
import * as variables from './nodes.js';
window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);
variables.trendMoviesBtn.addEventListener('click', ()=>{
        location.hash='#trends'
} )
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
    variables.generalContainer.classList.add('inactive')
}

function categoriesPage(){

    variables.categoriesContainer.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.movieSelected.classList.add('inactive')
    variables.generalContainer.classList.remove('inactive')
    variables.backButton.classList.add('inactive')

    const [_, categoryData]= location.hash.split('=') //['#category', 'id-name'] /show movies by category selected
    const [categoryId, categoryName] = categoryData.split('-')
    
    getMovies('discover/movie', variables.generalMoviesContainer, {
        params:{
            with_genres: categoryId}
        })
    variables.titleArea.innerHTML = categoryName
}

function searchPage(){
    console.log('vista de busqueda') 
    variables.movieSelected.classList.add('inactive')
    variables.categoriesContainer.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.generalContainer.classList.remove('inactive')
    variables.backButton.classList.remove('inactive')
    //catch the url search and split for send the query 
    const [_ , query] = location.hash.split('=')
    getMovies( 'search/movie', variables.generalMoviesContainer ,{params:{query}})

      //add history search to arrow button in search page
      variables.backButton.addEventListener('click', ()=> {
        window.history.back();
    })
}

function trendsPages(){
    console.log('trends') 
    trendsMovies('/trending/movie/day', variables.generalMoviesContainer, {params:{page:1}}, true)

    variables.generalContainer.classList.remove('inactive')
    variables.categoriesContainer.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.movieSelected.classList.add('inactive')
    variables.backButton.classList.add('inactive')
    variables.titleArea.innerHTML = 'Trends'

    const btnLoadMore = document.createElement('button')
    btnLoadMore.innerText = 'Loar More'
    variables.generalContainer.append(btnLoadMore)
}

function movieDetails(){
    window.scrollTo = (0, 0)
    console.log('Movie') 
    variables.generalContainer.classList.add('inactive')
    variables.movieSelected.classList.remove('inactive')
    variables.categoriesContainer.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.searchButton.classList.add('inactive')

        const [_ , idMovieData] = location.hash.split('=')
    getMovieById(idMovieData, variables.movieContainer1 )
    getMovies(`/movie/${idMovieData}/similar`, variables.relatedMoviesScrollContainer)
}
