 const $ = (id)=> document.getElementById(id)
//select a section for hidden or show
 export const categoriesContainer = $('categoriesContainer')
 export const trendingMoviesContainer= $('trendingMoviesContainer')
 export const categorySelected = $('categorySelectedContainer')
 export const movieSelected = $('movieDetails')
 export const movieContainer1 = $('movieDetails').querySelector('.main-section__movieDetail')
 export const movieContainer2 = $('movieDetails').querySelector('.relatedMovies-container')
 export const movieRelatedCategories = $('movieSelectedCategory')
 export const searchMoviesContainer = $('searchMovieContainer')

 //the form data for a search
 export const searchForm = $('searchForm').querySelector('input')
 export const searchButton = $('searchButton')
 export const backButton = $('historyBack')


//main div for fill movies
 export const allTreding = $('trendingMovies')
 export const activeCategorySelected = $('activeMoviesSelected') 
 export const searchContainer = $('searchContainer')
 export const titleArea = $('header-category__title') //title of selected category