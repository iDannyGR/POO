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

function createObserver() {
    return new IntersectionObserver((elements) => {
        elements.forEach(element => {
            if (element.isIntersecting){
                element.target.setAttribute('src', element.target.dataset.id)}
        })
    })
}
//creo el observer,.
let observer = createObserver()

//function fill container of movies
function fillMovies(movies, container, {clean=true}={}){
    try {
        if(clean){
            container.innerHTML = ''
        }
        const fillContainer = [];
        movies.forEach(movie => {
           const movieContainer = document.createElement('div');
           movieContainer.classList.add('post-movie');
           movieContainer.addEventListener('click',() =>{
                location.hash = `#movie=${movie.id}`
           })
           const imgMovie = document.createElement('img');
           const averageMovie = document.createElement('p');
           if(movie.poster_path) {
            imgMovie.setAttribute('data-id', IMG + movie.poster_path)
           imgMovie.setAttribute('alt', movie.title);  //en setAttribute se puede agregar logica de programacion
           averageMovie.innerHTML= 'date: ' + movie.release_date
           movieContainer.append(imgMovie, averageMovie);
           }else{
                movieContainer.classList.add('empty')
                averageMovie.innerHTML = movie.title
                movieContainer.append(averageMovie);
           }
           observer.observe(imgMovie)
           fillContainer.push(movieContainer)
        });
        container.append(...fillContainer)
    } catch (error) {
         throw Error(error) 
    }
};

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
//functions for fill sections and container
async function getMovies(path, container, optionalParams={}){
    try {
       const data =await getData(path, optionalParams)
       const movies = data.results
       fillMovies(movies, container) 
       container.addEventListener('scroll', ()=>{pagination(container, path)})
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

async function getMovieById(id, container ){  //detail=[]
        try {
        const data =await  getData(`movie/${id}`) 
            if(data.poster_path){
                container.querySelector('.movieDetail-title').textContent = data.title
                container.querySelector('.movieDetail-score').textContent= data.vote_average.toFixed(1)
                container.querySelector('.movieDetail-description').textContent = data.overview
                container.getElementsByTagName('img')[0].src = `${IMG}${data.poster_path}`
                createCategories(data.genres, container.querySelector('.categoryList'))
            }else{
                container.removeChild(container.getElementsByTagName('img')[0])
                container.classList.add('emptyMovie')
                container.querySelector('.movieDetail-title').textContent = data.title
                container.querySelector('.movieDetail-score').textContent= data.vote_average.toFixed(1)
                container.querySelector('.movieDetail-description').textContent = 'No content / no Have any description'
                createCategories(data.genres, container.querySelector('.categoryList'))
            }             
    } catch (error) {
         throw Error(error) 
    }
}
async function pagination(container, pach){
    try {
            const {scrollTop,scrollHeight,clientHeight} = container
            const  autoScroll =  (scrollTop + clientHeight ) == scrollHeight
            let page = 1
            console.log(autoScroll, scrollTop,clientHeight, scrollHeight)
            if(autoScroll) {
                    page++
                    const data = await getData(pach, {params:{page:page}})
                    const movies = data.results
                  fillMovies(movies,container,{clean:false}) 
            }
     } catch (error) {
         throw Error(error)  
     }
}
async function trendsMovies(path, container, optionalParams={}){
    try {
       const data =await getData(path, optionalParams)
       const movies = data.results
       fillMovies(movies, container) 
       container.addEventListener('scroll', ()=>{pagination(container, path)})
    } catch (error) {
        throw Error(error)  
    }
}

export {getCategoriesPreview, getMovies, getMovieById,pagination, trendsMovies}
