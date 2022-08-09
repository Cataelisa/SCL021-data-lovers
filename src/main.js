//import { example } from "./data.js";
// import data from './data/lol/lol.js';
//import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

function goToCharacters() {
  // show the  characters
  let characters = document.getElementById("characters");
  characters.style.display = "block";

  // Hide the front page
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}

//go to characters
let showCharacters = document.getElementById("personajes");
showCharacters.addEventListener("click", goToCharacters);

//console.log(example, data);
