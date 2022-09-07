//import and executing firts events 
import {getCategoriesPreview,previewTrending, getMovies, getMovieById, trendsMovies, getlikedMovies} from './axios.js'
import * as variables from './nodes.js';
const URLAPI = {listCategory:'/genre/movie/list', trends:'/trending/movie/day',categorySelected:'discover/movie', search:'search/movie' }
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
   }else if (location.hash.startsWith('#favorites')){
    favoritePage()
   }else{homePage()
    }
}

//executing funtions when the users selected a sections or movies
function homePage(){
    console.log('Home')
    previewTrending(URLAPI.trends, variables.allTreding)
    getCategoriesPreview(URLAPI.listCategory, variables.categoryList)
    
    variables.categoriesContainer.classList.remove('inactive')
    variables.trendingMoviesContainer.classList.remove('inactive')
    variables.movieSelected.classList.add('inactive')
    variables.generalContainer.classList.add('inactive')
    variables.favoriteSection.classList.add('inactive')
    variables.titleFavorite.classList.add('inactive')
}

function categoriesPage(){

    variables.categoriesContainer.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.movieSelected.classList.add('inactive')
    variables.generalContainer.classList.remove('inactive')
    variables.backButton.classList.add('inactive')
    variables.favoriteSection.classList.add('inactive')
    variables.titleFavorite.classList.add('inactive')
    const [_, categoryData]= location.hash.split('=') //['#category', 'id-name'] /show movies by category selected
    const [categoryId, categoryName] = categoryData.split('-')
    
    getMovies(URLAPI.categorySelected, variables.generalMoviesContainer, {
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
    variables.favoriteSection.classList.add('inactive')
    variables.titleFavorite.classList.add('inactive')
    //catch the url search and split for send the query 
    const [_ , query] = location.hash.split('=')
    
    getMovies( URLAPI.search, variables.generalMoviesContainer ,{params:{query}})

      //add history search to arrow button in search page
      variables.backButton.addEventListener('click', ()=> {
        window.history.back();
    })
}

function trendsPages(){
    console.log('trends')     
    variables.generalContainer.classList.remove('inactive')
    variables.categoriesContainer.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.movieSelected.classList.add('inactive')
    variables.backButton.classList.add('inactive')
    variables.titleArea.innerHTML = 'Trends'
    variables.favoriteSection.classList.add('inactive')
    variables.titleFavorite.classList.add('inactive')
    trendsMovies(URLAPI.trends, variables.generalMoviesContainer,{clean:true})
    
}
function favoritePage(){
    console.log('favourite')     
    variables.generalContainer.classList.add('inactive')
    variables.categoriesContainer.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.movieSelected.classList.add('inactive')
    variables.backButton.classList.add('inactive')
    variables.titleArea.innerHTML = 'Trends'
    variables.favoriteSection.classList.remove('inactive')
    variables.titleFavorite.classList.remove('inactive')
    getlikedMovies(variables.favoriteContainer)
}
function movieDetails(){
    window.scrollTo = (0, 0)
    console.log('Movie') 
    variables.generalContainer.classList.add('inactive')
    variables.movieSelected.classList.remove('inactive')
    variables.categoriesContainer.classList.add('inactive')
    variables.trendingMoviesContainer.classList.add('inactive')
    variables.searchButton.classList.add('inactive')
    variables.favoriteSection.classList.add('inactive')
    variables.titleFavorite.classList.add('inactive')

        const [_ , idMovieData] = location.hash.split('=')
    getMovieById(idMovieData, variables.movieContainer1 )
    getMovies(`/movie/${idMovieData}/similar`, variables.relatedMoviesScrollContainer)
}
