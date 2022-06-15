 const URL = 'https://api.thecatapi.com/v1/';
//para colocar una api key se escribe en la URL 
const API_KEY='e704b6ae-17c0-4d01-9e4a-5e1f6c9d0bf4';
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
        const conexion =await fetch(`${URL}images/search${queryParam}`,{
            method: 'GET',
            headers: {'X-API-KEY': API_KEY}
        });
        const data = await conexion.json(); 
        const allData = [];
       // const allData = new DocumentFragment(); //crea un framento de document
        //no tiene padre y no afecta el load de todo el DOM
        data.forEach((item) => {
            const container= document.createElement('div');
            const  imgSrc = document.createElement('img');
            const addFavorite = document.createElement('button');

            imgSrc.src= item.url;
            imgSrc.className='imageLoad';
            container.className='containerImg'
            addFavorite.textContent='Favourite';
            addFavorite.className = 'button';
            addFavorite.addEventListener('click', favourite.bind('id', item.id));
            // .bind() instancia una funcion que le asigna al this de esa funcion el valor
            // entregado como parametro en este caso item.id
            container.append(addFavorite, imgSrc);
            allData.push(container);
            console.table(item)
         });
         body.append(...allData);
    } catch (error) {
        errorMessage.textContent('Error de conexion')
        throw Error(error);    
    }
}
async function loadCatFavorite(){
    favoritesContainer.innerHTML = '';
    const response = await fetch(`${URL}favourites`,{
        method:'GET',
        headers:{'X-API-KEY': API_KEY}
    });
    const data = await response.json();
    const dataFavorites = [];
        data.forEach(item => {
            const art= document.createElement('div');
            const  img = document.createElement('img');
            const btn = document.createElement('button');

            btn.className='button';
            art.className = 'containerImg';
            btn.textContent='Eliminar';
            btn.addEventListener('click', deleteMichi.bind('id', item.id))
            img.className='imageLoad';
            img.src = item.image.url;
            art.append(btn,img);
            dataFavorites.push(art)
            console.log(item) 
            
        })
    favoritesContainer.append(...dataFavorites)
}
async function favourite(id){
    try {
        
        const conexion =await fetch(`${URL}favourites`,{
            method:'POST',
            headers:{
                'X-API-KEY': API_KEY,
                'Content-Type':'application/json'
            },
            body: JSON.stringify({image_id:id})
            
        });
        loadCatFavorite()
    } catch (error) {
        console.table(error)
        throw Error(error)
    }
    
}
async function deleteMichi(id){
    try {
        const conexion =await fetch(`${URL}favourites/${id}`,{method:'DELETE', headers:{'X-API-KEY':API_KEY}});
        loadCatFavorite()
    } catch (error) {
        console.table(error)
        throw Error(error)
    }
}
async function uploadMichi(){
    
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
