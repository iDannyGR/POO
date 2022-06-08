 const URL = 'https://rickandmortyapi.com/api/character/';

// function ramdomNumber(n1, n2){
//     return parseInt((Math.random() * (n2 - n1 + 1)) + n1);
// }
const body = document.getElementById('container');
async function rmperson(){
        const conexion =await fetch(URL);
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
