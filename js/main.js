const url = `https://hp-api.onrender.com/api/characters`
const listaOL = document.getElementById("listaOL");

function convertPersonagemToLi(personagem){
    return `
    <li class="personagem">
        <span class="name">${personagem.name}</span>
        <span class="house">${personagem.house}</span>
        <img src="${personagem.image}" alt="${personagem.name}":
    </li> 
    `
}

fetch(url)
    .then((response) => response.json())
    .then((lista) => listaOL.innerHTML = lista.map(convertPersonagemToLi).join(""))
    .catch((error) => console.log(error));