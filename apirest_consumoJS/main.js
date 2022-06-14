 const URL = 'https://api.thecatapi.com/v1/';
//para colocar una api key se escribe en la URL 
const API_KEY='api_key=e704b6ae-17c0-4d01-9e4a-5e1f6c9d0bf4';
let queryParam = '?limit=10';
//es la key que solicite en cat API
// function ramdomNumber(n1, n2){
//     return parseInt((Math.random() * (n2 - n1 + 1)) + n1);
// }
const body = document.getElementById('ramdomCat');
const favoritesContainer = document.getElementById('favorite');
const errorMessage = document.getElementById('error');

async function getData(){
    try {
        const conexion =await fetch(`${URL}images/search${queryParam}&${API_KEY}`);
        const data = await conexion.json(); 
        const allData = new DocumentFragment(); //crea un framento de document
        //no tiene padre y no afecta el load de todo el DOM
        data.forEach((item) => {
            const container= document.createElement('div');
            container.className='containerImg'
            const  imgSrc = document.createElement('img');
            imgSrc.src= item.url;
            imgSrc.className='imageLoad';
            const addFavorite = document.createElement('button');
            addFavorite.textContent='Favourite';
            addFavorite.className = 'button';
            //addFavorite.setAttribute('onclick', 'favourite()');
            container.append(addFavorite, imgSrc);
            allData.append(container);
         });
         body.append(allData);
    } catch (error) {
        errorMessage.textContent('Error de conexion')
        throw Error(error);    
    }
}
async function loadCatFavorite(){
    const response = await fetch(`${URL}favourites?${API_KEY}`);
    const data = await response.json();
        data.forEach(item => {
            const art= document.createElement('div');
            const  img = document.createElement('img');
            const btn = document.createElement('button');
            btn.className='button';
            art.className = 'containerImg';
            btn.textContent='Eliminar';
            img.className='imageLoad';
            img.src = item.image.url;
            art.append(btn,img);
            favoritesContainer.append(art);
        })
    
}
async function favourite(id){
    try {
        const conexion =await fetch(`${URL}favourites?${API_KEY}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({image_id:'b09'})
        });
            const data = await conexion.json(); 
           


    } catch (error) {
        console.table(error)
        throw Error(error)
    }
    
}

async function deleteMichi(){

}

getData()
loadCatFavorite()

// fetch(URL)
//     .then(res => res.json())
//     .then(data =>{
//         let rnum = ramdomNumber(0,19);
//         let tHead = document.querySelector('p');
//         let imgBox = document.querySelector('img');
//         tHead.innerHTML = data.results[rnum].name;
//         imgBox.src = data.results[rnum].image;
//     })
