
import data from "./data/harrypotter/harry.js";
import { example } from "./data.js";
console.log(data.characters[49]);


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


