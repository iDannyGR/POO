 const $ = (id)=> document.getElementById(id)
 const $1 = (id)=> document.querySelector(id)
//select a section for hidden or show
 export const categoriesContainer = $('categoriesContainer')
 export const trendingMoviesContainer= $('trendingMoviesContainer')
 export const categorySelected = $('categorySelectedContainer')
 export const movieRelatedCategories = $('movieSelectedCategory')
 export const searchMoviesContainer = $('searchMovieContainer')

 //list of categories
 export const categoryList = $('categoryList')


 //the form data for a search
 export const searchForm = $('searchForm').querySelector('input')
 export const searchButton = $('searchButton')
 export const backButton = $('historyBack')


//main div for fill movies
 export const allTreding = $('trendingMovies')
 export const activeCategorySelected = $('activeMoviesSelected') 
 export const searchContainer = $('searchContainer')
 export const titleArea = $('header-category__title') //title of selected category

 //movie details

 export const movieSelected = $('movieDetails')
 export const movieContainer1 = $('movieDetails_content')
 export const movieContainer2 = $('movieDetails_RelatedMovies')
 export const relatedMoviesScrollContainer = $('relatedMoviesScrollContainer')