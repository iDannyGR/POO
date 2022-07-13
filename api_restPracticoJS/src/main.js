import { API_KEY } from './env.js'; 
const trendURL = 'https://api.themoviedb.org/3/trending/movie/day?api_key='

async function getTrendingMoviesPreview(){
    const res = await fetch(trendURL+API_KEY);
    const data =await res.json();
    const movies= data.results;
    console.table( movies);
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
};

getTrendingMoviesPreview()




        // <img src="./img/BSG.jpg" alt="" />
        // <h3>movie  1</h3>
        // <p>1:30 Minutes</p>
