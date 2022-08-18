import data from "./data/harrypotter/harry.js";
import { filterData, filterGender } from "./data.js";

let showBooks = document.getElementById("libros-de-la-saga");
showBooks.addEventListener("click", goToBooks);

// Go to books
function goToBooks() {
  let books = document.getElementById("info-books");
  books.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}

// Go the characters
function goToCharacters() {
  let characters = document.getElementById("info-main-characters");
  characters.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}
let showCharacters = document.getElementById("personajes");
showCharacters.addEventListener("click", goToCharacters);

//keep the data from the objects
const mainCharacters = data.mainCharacters;
const characters = data.characters;
const funFacts = data.funFacts;
const spells = data.spells;
const potions = data.potions;
const books = data.books;

//show the books
books.forEach((everyBook) => {
  const divBooks = document.createElement("div");
  const bookCover = document.createElement("img");
  bookCover.src = everyBook.photo;
  bookCover.className = "booksCovers";
  divBooks.className = "book-cards";
  const title = document.createElement("h1");
  title.innerHTML = everyBook.title;
  const releaseDay = document.createElement("p");
  releaseDay.innerHTML = everyBook.releaseDay;
  const description = document.createElement("p");
  description.innerHTML = everyBook.description;
  divBooks.appendChild(bookCover);
  divBooks.appendChild(title);
  divBooks.appendChild(releaseDay);
  divBooks.sppendChild(description);
  document.getElementById("info-books").appendChild(divBooks);
});

//contain and show main characters by default
mainCharacters.forEach((character) => {
  const div = document.createElement("div");
  const image = document.createElement("img");
  image.src = character.photo;
  image.className = "character";
  div.className = "cards";
  const name = document.createElement("h1");
  name.innerHTML = character.name;
  const house = document.createElement("p");
  house.innerHTML = character.house;
  div.appendChild(image);
  div.appendChild(name);
  div.appendChild(house);
  document.getElementById("info-main-characters").appendChild(div);
});

//"filter" to show all characters by house

let filterAllCharacters = document.getElementById("select-character");
filterAllCharacters.addEventListener("change", filterByHouse);

function filterByHouse() {
  let selecEveryCharacter = document.getElementById("select-character").value;
  let filterHouse = filterData(characters, selecEveryCharacter);
  filterHouse.forEach((everyCharacter) => {
    const div = document.createElement("div");
    const name = document.createElement("h1");
    name.innerHTML = everyCharacter.name;
    const house = document.createElement("p");
    house.innerHTML = everyCharacter.house;
    div.appendChild(name);
    div.appendChild(house);
    document.getElementById("info-characters").appendChild(div);
  });
}

//"filter" to show all characters by gender

let filterAllCharactersByGender = document.getElementById("select-character");
filterAllCharactersByGender.addEventListener("change", filterByGender);

function filterByGender() {
  let selecEveryCharacter = document.getElementById("select-character").value;
  let filterGenders = filterGender(characters, selecEveryCharacter);
  filterGenders.forEach((everyCharacter) => {
    const div = document.createElement("div");
    const name = document.createElement("h1");
    name.innerHTML = everyCharacter.name;
    const gender = document.createElement("p");
    gender.innerHTML = everyCharacter.gender;
    div.appendChild(name);
    div.appendChild(gender);
    document.getElementById("info-characters").appendChild(div);
  });
}

/*function allCharacters() {
  const div = document.createElement("div");
  const h1 = document.createElement('h1');
  h1.innerHTML = ("hola de prueba");
  div.appendChild(h1);
  document.getElementById("root2").appendChild(div);
}

let filterAllCharacters = document.getElementById("todos-los-personajes");
filterAllCharacters.addEventListener("change", allCharacters);*/
/*function allCharacters() {characters.forEach((everyCharacter) => {
  const div = document.createElement("div");
  const name = document.createElement("h1");
  name.innerHTML = everyCharacter.name;
  const house = document.createElement("p");
  house.innerHTML = everyCharacter.house;
  div.appendChild(name);
  div.appendChild(house);
  document.getElementById("root").appendChild(div);
});

}
let filterAllCharacters = document.getElementById("todos-los-personajes");
filterAllCharacters.addEventListener("click", allCharacters);*/

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
