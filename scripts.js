const randomNumber = Math.floor(Math.random() * 1000) + 1
const baseURL = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;


const img = document.getElementById('pokeImg');
const pokeInfo = document.getElementById('pokeInfo');
const addPoke = document.getElementById('displayInfo');
const addInfo = document.querySelector('.displayPokeInfo')
const pokemonInfo = document.querySelector('.pokemonInfo')

let newPoke = () => {

    fetch(baseURL)
        .then (res => res.json())
        .then (data => poke(data))
        .catch (e => console.log(e))

}

const poke = (data) => {
    while(addPoke.firstChild) {
        addPoke.removeChild(addPoke.firstChild);
    }
    while(img.firstChild) {
        img.removeChild(img.firstChild);
    }
    let pokemon = data;

    let pokemonName = pokemon.forms[0].name
    let pokemonType = pokemon.types[0].type.name
    let pokemonWeight = pokemon.weight

    img.src = pokemon.sprites.front_default
    

    let name = document.createElement('p');
    let type = document.createElement('p');
    let weight = document.createElement('p');
    

    name.innerText = `Name: ${pokemonName}`;
    type.innerText = `Type: ${pokemonType}`;
    weight.innerText = `Weight: ${pokemonWeight}`;

    addPoke.appendChild(name);
    addPoke.appendChild(type);
    addPoke.appendChild(weight);
    
}
