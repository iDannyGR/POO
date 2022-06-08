 const URL = 'https://rickandmortyapi.com/api/character/';
//para colocar una api key se escribe en la URL 
// api_key=e704b6ae-17c0-4d01-9e4a-5e1f6c9d0bf4
//es la key que solicite en cat API
// function ramdomNumber(n1, n2){
//     return parseInt((Math.random() * (n2 - n1 + 1)) + n1);
// }
const body = document.getElementById('container');
let queryParam = '?page=5';
async function rmperson(){
        const conexion =await fetch(URL+queryParam);
        const data = await conexion.json(); 
        
        data.results.forEach(item => {
            const cart= document.createElement('div')
            const  imgSrc = document.createElement('img')
            imgSrc.src= item.image;
            const title = document.createElement('p')
            title.textContent= item.name
            cart.append(title, imgSrc);
            body.append(cart)
        });

}

rmperson()

// fetch(URL)
//     .then(res => res.json())
//     .then(data =>{
//         let rnum = ramdomNumber(0,19);
//         let tHead = document.querySelector('p');
//         let imgBox = document.querySelector('img');
//         tHead.innerHTML = data.results[rnum].name;
//         imgBox.src = data.results[rnum].image;
//     })
