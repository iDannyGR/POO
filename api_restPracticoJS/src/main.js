import { API_KEY } from './env.js'; 
const trendURL = 'https://api.themoviedb.org/3/trending/movie/day?api_key='
const categoryMovies = 'https://api.themoviedb.org/3/genre/movie/list?api_key='

async function getTrendingMoviesPreview(){
    try {
        const res = await fetch(trendURL+API_KEY);
        const data =await res.json();
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
        const res = await fetch(categoryMovies + API_KEY)
        const data = await res.json()
        const categories = data.genres
        const categoryContainer = document.getElementById('category-menu')
        const listCategory = []
            console.log(categories)
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
getTrendingMoviesPreview()
getCategoriesPreview()



        // <img src="./img/BSG.jpg" alt="" />
        // <h3>movie  1</h3>
        // <p>1:30 Minutes</p>
