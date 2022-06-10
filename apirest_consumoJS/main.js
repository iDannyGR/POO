 const URL = 'https://api.thecatapi.com/v1/';
//para colocar una api key se escribe en la URL 
const API_KEY='api_key=e704b6ae-17c0-4d01-9e4a-5e1f6c9d0bf4';
let queryParam = '?limit=10';
//es la key que solicite en cat API
// function ramdomNumber(n1, n2){
//     return parseInt((Math.random() * (n2 - n1 + 1)) + n1);
// }
const body = document.getElementById('container');
const error = document.getElementById('error')

async function getData(){
    try {
        const conexion =await fetch(`${URL}images/search${queryParam}&${API_KEY}`);
        const data = await conexion.json(); 
        data.forEach((item) => {
            const container= document.createElement('div');
            const  imgSrc = document.createElement('img');
            imgSrc.src= item.url;
            const addFavorite = document.createElement('button');
            addFavorite.textContent='Favourite';
            container.append(addFavorite, imgSrc);
            body.append(container)
         });
    } catch (error) {
        error.textContent('Error de conexion')
        throw Error(error);    
    }
}

async function favourites(){
    try {
        const conexion =await fetch(`${URL}favourites?${API_KEY}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:
        });
        console.log(conexion)
        const data = await conexion.json(); 


    } catch (error) {
        
    }
    
}

favourites()
getData()

// fetch(URL)
//     .then(res => res.json())
//     .then(data =>{
//         let rnum = ramdomNumber(0,19);
//         let tHead = document.querySelector('p');
//         let imgBox = document.querySelector('img');
//         tHead.innerHTML = data.results[rnum].name;
//         imgBox.src = data.results[rnum].image;
//     })
