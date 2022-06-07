const URL = 'https://rickandmortyapi.com/api/character';

async function persons(number){
    const response = await fetch(URL)
    const data = await response.json();
    let tHead = document.querySelector('p');
    let imgbox = document.querySelector('img'); 
    tHead.innerHTML = data.results[number].name;
    imgbox.src = data.results[number].image;
}    
    
let rNumber =Math.floor(Math.random() * (826 - 0)) + 0;
const button= document.getElementById('ramdom')
console.log(rNumber)
button.onclick = persons(rNumber)

