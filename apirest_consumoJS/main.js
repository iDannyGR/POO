const URL = 'https://rickandmortyapi.com/api/character/?page=4';

function ramdomNumber(n1, n2){
    return parseInt((Math.random() * (n2 - n1 + 1)) + n1);
}

async function rmperson(){
    try {
        const con =await fetch(URL);
        const data =await con.json();
        body = document.getElementById('container');
         data.results.forEach(item => {
        let contenido =   `<p>${item.name}</p>
                  <img>${item.image}</img>`;
        body.innerHTML 
        });  
    } catch (error) {
        throw new Error(error)
    }
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
