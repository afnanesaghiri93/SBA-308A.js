
//   fetch("https://pokeapi.co/api/v2/pokemon")
//   .then(response => console.log(response))
//   .catch(error => console.error(error));
// Making a GET request with Fetch
//Make use of Promises and async/await syntax as appropriate.
//URL :https://pokeapi.co/api/v2/pokemon/

// async function fetchData(){
//     try{
//         const pokemonName = document.getElementById("PokemonName").value.toLowerCase
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto ${pokemonName}`);
//         if(!response.ok){
//             throw new Error("Could not fetch resource")
//         }


const pokemonBtn = document.getElementById("pokemonBtn");
const pokemonNameInput = document.getElementById("PokemonName");
const pokemonImg = document.getElementById("POKIMONsprite");
const body = document.getElementsByTagName("body")[0];

pokemonBtn.addEventListener("click", () => {
  const pokemonName = pokemonNameInput.value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
  .then(response => {
    return response.json();
  })
  .then( data => {
    pokemonImg.src = data.sprites.front_default;
    pokemonImg.style = "width: 100px;"
  })
  .catch(error => console.log("pokemon name is not recognized"));
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  body.style = `background-color: rgb(${r}, ${g}, ${b});`
});

      