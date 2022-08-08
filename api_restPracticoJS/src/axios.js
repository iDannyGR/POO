import {API_KEY} from './env.js'
const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    params:{
        api_key: API_KEY,
    }
});
// async function getTrendingMoviesPreview(){
//     try {
//         const {data, status} = await api.get(`/trending/movie/day`)
//         const movies= data.results;
//         const trendingContanier = [];
//         const allTreding = document.getElementById('trendingMovies');
//         allTreding.replaceChildren()
//         movies.forEach(movie => {
//            const movieContainer = document.createElement('div');
//            movieContainer.classList.add('post-movie');
//            const imgMovie = document.createElement('img');
//            imgMovie.src = 'https://image.tmdb.org/t/p/w300'+ movie.poster_path
//            imgMovie.setAttribute('alt', movie.title);  
//            const averageMovie = document.createElement('p');
//            averageMovie.innerHTML= 'Votes: ' + movie.vote_average;
//            movieContainer.append(imgMovie, averageMovie);
//            trendingContanier.push(movieContainer)
//         });
//         allTreding.append(...trendingContanier)
//     } catch (error) {
//          throw Error(error) 
//     }
// };
 async function getCategoriesPreview(){
    try {
        const {data, status} = await api.get('genre/movie/list')
        const categories = data.genres
        const categoryContainer = document.getElementById('categoryList')
        const listCategory = []
        categoryContainer.replaceChildren()
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
        categoryContainer.append(...listCategory)
    } catch (error) {
        throw Error(error)
    }
}
// async function getCategorySelected(id, category){
//     try {
//         const {data, status} = await api.get(`discover/movie`,{
//             params:{
//                 with_genres: id
//             }
//         })        
//         const titleArea = document.getElementById('header-category__title')
//         titleArea.innerHTML = category 
//         const movies= data.results;
//         const trendingContanier = [];
//         const allTreding = document.getElementById('activeMoviesSelected');
//         allTreding.replaceChildren()
//         movies.forEach(movie => {
//            const movieContainer = document.createElement('div');
//            movieContainer.classList.add('post-movie');
//            const imgMovie = document.createElement('img');
//            imgMovie.src = 'https://image.tmdb.org/t/p/w300'+ movie.poster_path
//            imgMovie.setAttribute('alt', movie.title);  
//            const averageMovie = document.createElement('p');
//            averageMovie.innerHTML= 'date: ' + movie.release_date;
           
//            movieContainer.append(imgMovie, averageMovie);
//            trendingContanier.push(movieContainer)
//         });
//         allTreding.append(...trendingContanier)
//     } catch (error) {
//          throw Error(error) 
//     }
// };

//function fill container of movies
async function fillMovies(path, container, optionalParams={}){
    try {
        container.replaceChildren()
        const {data, status} = await api.get(path, optionalParams)        
        const movies= data.results;
        const fillContainer = [];
        movies.forEach(movie => {
           const movieContainer = document.createElement('div');
           movieContainer.classList.add('post-movie');
           const imgMovie = document.createElement('img');
           imgMovie.src = 'https://image.tmdb.org/t/p/w300'+ movie.poster_path
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


export {getCategoriesPreview, fillMovies}



