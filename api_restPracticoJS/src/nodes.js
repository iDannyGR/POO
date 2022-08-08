 const $ = (id)=> document.getElementById(id)

 export const categoriesContainer = $('categoriesContainer')
 export const trendingMoviesContainer= $('trendingMoviesContainer')
 export const categorySelected = $('categorySelectedContainer')
 export const movieSelected = $('movieDetails')
 export const searchForm = $('searchForm').querySelector('input')
 export const searchButton = $('searchButton')
 export const searchContainer = $('searchMovieContainer')


//main div for fill movies
 export const allTreding = $('trendingMovies')
 export const activeCategorySelected = $('activeMoviesSelected') 
 export const titleArea = $('header-category__title') //title of selected category