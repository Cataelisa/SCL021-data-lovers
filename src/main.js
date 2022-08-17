import data from "./data/harrypotter/harry.js";
import { filterHouse } from "./data.js";

const characters = data.characters;
const mainCharacters = data.mainCharacters;
const potions = data.potions;
const spells = data.spells;
const books = data.books;
const funFacts = data.funFacts;

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

function goToBooks() {
  // show the books
  let booK = document.getElementById("libros");
  booK.style.display = "block";

  // Hide the front page
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}

//go to books
let showBook = document.getElementById("libros-de-la-saga");
showBook.addEventListener("click", goToBooks);

/*function goToCharacters() {
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

function goToBooks() {
  // show the books
  let booK = document.getElementById("libros");
  booK.style.display = "block";

  // Hide the front page
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}

//go to books
let showBook = document.getElementById("libros-de-la-saga");
showBook.addEventListener("click", goToBooks);

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
showCharacters.addEventListener("click", goToCharacters);*/

//Mostrar personajes principales por defecto
//contain and show main characters by default
/*mainCharacters.forEach((character) => {
  const div = document.createElement("div");
  //const image = document.createElement("img");
  //image.src = character.photo;
  //image.className = "character";
  const name = document.createElement("h3");
  name.innerHTML = character.name;
  const house = document.createElement("p");
  house.innerHTML = character.house;
  //div.appendChild(image);
  div.appendChild(name);
  div.appendChild(house);
  document.getElementById("root").appendChild(div);
});*/

//contain and show main characters by default

/*function createCharacter(characters) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  characters.forEach(function (character) {
    const card = document.createElement("div");
    card.classList.add("cardDiv");
    cardContainer.appendChild(card);
  });
  return cardContainer;
}

console.log(createCharacter);*/

/*document.body.onload = charactersCards;

function charactersCards() {
  // crea un nuevo div
  // y añade contenido
  let cards = document.createElement("div");
  let charactersData = document.createTextNode(mainCharacters.name);
  cards.appendChild(charactersData); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  let currentDiv = document.getElementById("root");
  document.body.insertBefore(cards, currentDiv);
}

console.log(charactersCards);*/

characters.filter(
  characters.forEach((character) => {
    const div = document.createElement("div");
    //const image = document.createElement("img");
    //image.src = character.photo;
    //image.className = "character";
    const name = document.createElement("h3");
    name.innerHTML = character.name;
    const house = document.createElement("p");
    house.innerHTML = character.house;
    //div.appendChild(image);
    div.appendChild(name);
    div.appendChild(house);
    document.getElementById("root").appendChild(div);
  })
);

books.forEach((book) => {
  const div = document.createElement("div");
  //const image = document.createElement("img");
  //image.src = character.photo;
  //image.className = "character";
  const title = document.createElement("h3");
  title.innerHTML = book.title;
  const releaseDay = document.createElement("p");
  releaseDay.innerHTML = book.releaseDay;
  //div.appendChild(image);
  div.appendChild(title);
  div.appendChild(releaseDay);
  document.getElementById("root2").appendChild(div);
});
