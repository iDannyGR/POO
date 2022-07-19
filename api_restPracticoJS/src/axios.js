import {API_KEY} from './env.js'
const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    params:{
        api_key: API_KEY,
    }
});


 async function getTrendingMoviesPreview(){
    try {
        const {data, status} = await api.get(`/trending/movie/day`)
        const movies= data.results;
        const trendingContanier = [];
        const allTreding = document.getElementById('trendingMovies');
        movies.forEach(movie => {
          
           const movieContainer = document.createElement('div');
           movieContainer.classList.add('post-movie');
           const imgMovie = document.createElement('img');
           imgMovie.src = 'https://image.tmdb.org/t/p/w300'+ movie.poster_path
           imgMovie.setAttribute('alt', movie.title);  
           const averageMovie = document.createElement('p');
           averageMovie.innerHTML= 'Votes: ' + movie.vote_average;
           
           movieContainer.append(imgMovie, averageMovie);
           trendingContanier.push(movieContainer)
        });
        allTreding.append(...trendingContanier)
    } catch (error) {
         throw Error(error) 
    }
};
 async function getCategoriesPreview(){
    try {
        const {data, status} = await api.get('genre/movie/list')
        const categories = data.genres
        const categoryContainer = document.getElementById('categoryList')
        const listCategory = []
        categories.forEach(category => {
                    const oneCategory = document.createElement('li')
                    const categoryLink = document.createElement('a')
                    categoryLink.innerHTML= category.name
                    oneCategory.append(categoryLink)
                    listCategory.push(oneCategory)
        });
        categoryContainer.append(...listCategory)
    } catch (error) {
        throw Error(error)
    }
}

async function getCategorySelected(){
    try {
        const {data, status} = await api.get(`/trending/movie/day`)
        const movies= data.results;
        const trendingContanier = [];
        const allTreding = document.getElementById('activeMoviesSelected');
        movies.forEach(movie => {
           const movieContainer = document.createElement('div');
           movieContainer.classList.add('post-movie');
           const imgMovie = document.createElement('img');
           imgMovie.src = 'https://image.tmdb.org/t/p/w300'+ movie.poster_path
           imgMovie.setAttribute('alt', movie.title);  
           const averageMovie = document.createElement('p');
           averageMovie.innerHTML= 'date: ' + movie.release_date;
           
           movieContainer.append(imgMovie, averageMovie);
           trendingContanier.push(movieContainer)
        });
        allTreding.append(...trendingContanier)
    } catch (error) {
         throw Error(error) 
    }
};


export {getTrendingMoviesPreview,getCategoriesPreview, getCategorySelected}