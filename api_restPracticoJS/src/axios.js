import {API_KEY} from './env.js'
const IMG = 'https://image.tmdb.org/t/p/w300'
const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    params:{
        api_key: API_KEY,
    }
});

//function for query to the API
async function getData(path, params={}){
    const {data} = await api.get(path, params)
    return data
}

function createCategories(categories, container){
    container.innerHTML= ''
    const listCategory = []
    categories.forEach(category => {
                const oneCategory = document.createElement('li')
                const categoryLink = document.createElement('a')
                categoryLink.setAttribute('id', 'id' + category.id)
                categoryLink.addEventListener('click', ()=>{
                    location.hash = `#category=${category.id}-${category.name}`
                })
                categoryLink.innerHTML= category.name
                oneCategory.append(categoryLink)
                listCategory.push(oneCategory)
    });
    container.append(...listCategory)

}

//function fill container of movies
 function fillMovies(movies, container){
    try {
        container.innerHTML = ''
        const fillContainer = [];
        movies.forEach(movie => {
           const movieContainer = document.createElement('div');
           movieContainer.classList.add('post-movie');
           movieContainer.addEventListener('click',() =>{
                location.hash = `#movie=${movie.id}`
           })
           const imgMovie = document.createElement('img');
           imgMovie.src = IMG + movie.poster_path
           imgMovie.setAttribute('alt', movie.title);  
           const averageMovie = document.createElement('p');
           averageMovie.innerHTML= 'date: ' + movie.release_date; 
           movieContainer.append(imgMovie, averageMovie);
           fillContainer.push(movieContainer)
        });
        container.append(...fillContainer)
    } catch (error) {
         throw Error(error) 
    }
};

async function getMovies(path, container, optionalParams={}){
    try {
       const data =await getData(path, optionalParams)
       const movies = data.results
       fillMovies(movies, container) 
    } catch (error) {
        throw Error(error)  
    }
}

async function getCategoriesPreview(path, container){
    try {
        const data =await getData(path)
        const categories = data.genres
        createCategories(categories, container)
    } catch (error) {
        throw Error(error)
    }
}

async function getMovieById(id, detail=[]){
        try {
        const data =await  getData(`movie/${id}`) 
        detail[0].textContent = data.title
        detail[1].textContent= data.vote_average.toFixed(1)
        detail[2].textContent = data.overview
        detail[3].src = `${IMG}${data.poster_path}`
        createCategories(data.genres, detail[4])
             
    } catch (error) {
         throw Error(error) 
    }

}
export {getCategoriesPreview, getMovies, getMovieById}



