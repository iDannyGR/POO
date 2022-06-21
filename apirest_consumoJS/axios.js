let queryParam = '?limit=10';
const body = document.getElementById('ramdomCat');
const favoritesContainer = document.getElementById('favorite');
const errorMessage = document.getElementById('error');

const api = axios.create({
    baseURL : 'https://api.thecatapi.com/v1',
    params:{
        api_key: 'e704b6ae-17c0-4d01-9e4a-5e1f6c9d0bf4',
    }
});

async function getData(){
    try {
        const {data, status} = await api.get(`/images/search${queryParam}`)
    const allData = [];
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
        });
     body.append(...allData);
    } catch (error) {
        throw new Error (error)
    }
    
}
async function favourite(id){
  const {data, status} = await api.post('/favourites',{
        image_id:id
    });

    console.log('save');
    if(status !== 200){
        console.log(data.message);
    }else{ console.log('michi guardado');
    loadCatsFavorite()}
}
async function loadCatsFavorite(){
    try {
        favoritesContainer.innerHTML = '';
    const {data, status} = await api.get('/favourites')
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
        })
    favoritesContainer.append(...dataFavorites)
    } catch (error) {
        throw new Error(error)
    }  
}
async function deleteMichi(id){
    try {
       await api.delete(`/favourites/${id}`);
        loadCatsFavorite();
    } catch (error) {
        throw new Error(error)
    }
}
async function uploadMichi(){
    try {
        const form = document.getElementById('uploadMichi') ;
        const fData = new FormData(form);
    const {status} = await api.post('/images/upload',{
            body:fData
        });   
        console.log(status);
    } catch (error) {
        throw new Error(error) 
    }
    
}
function loadImgCat(){
    const file = document.getElementById("file").files;
    console.log(file);
    if (file.length > 0) {
      const fileReader = new FileReader();
      console.log(fileReader)
      fileReader.onload = function(e) {
        document.getElementById("upImg").setAttribute("src", e.target.result);
      };
      fileReader.readAsDataURL(file[0]);
    }
}

getData();
loadCatsFavorite();