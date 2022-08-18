import data from "./data/harrypotter/harry.js";
import {
  filterData,
  filterGender,
  filterAncestry,
  orderAz,
  orderZa,
} from "./data.js";

// Go the characters
function goToCharacters() {
  let characters = document.getElementById("second-page");
  characters.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}
let showCharacters = document.getElementById("personajes");
showCharacters.addEventListener("click", goToCharacters);

// Go to fun facts
function goToFunFacts() {
  let funFact = document.getElementById("second-page");
  funFact.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}
let showFunFact = document.getElementById("datos-curiosos");
showFunFact.addEventListener("click", goToFunFacts);

// Go to books
function goToBooks() {
  let books = document.getElementById("second-page");
  books.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}
let showBooks = document.getElementById("libros-de-la-saga");
showBooks.addEventListener("click", goToBooks);

//keep the data from the objects
const mainCharacters = data.mainCharacters;
const characters = data.characters;
const funFacts = data.funFacts;
const spells = data.spells;
const potions = data.potions;
const books = data.books;

//Clear main characters
let clearDefault = document.getElementById("select-character");
clearDefault.addEventListener("change", clearMainCharacters);

function clearMainCharacters() {
  document.getElementById("info-main-characters").innerHTML = " ";
}

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

//clear after each filter
let clear = document.getElementById("select-character");
clear.addEventListener("change", clearFilter);

function clearFilter() {
  document.getElementById("info-characters").innerHTML = " ";
}

//filter to show all characters by house
let filterAllCharacters = document.getElementById("select-character");
filterAllCharacters.addEventListener("change", filterByHouse);

function filterByHouse() {
  let selecEveryCharacter = document.getElementById("select-character").value;
  let filterHouse = filterData(characters, selecEveryCharacter);
  filterHouse.forEach((everyCharacter) => {
    const div = document.createElement("div");
    div.className = "cards";
    const image = document.createElement("img");
    image.src = "incognitocards.png";
    image.className = "character";
    const name = document.createElement("h1");
    name.innerHTML = everyCharacter.name;
    const house = document.createElement("p");
    house.innerHTML = everyCharacter.house;
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(house);
    document.getElementById("info-characters").appendChild(div);
  });
}

//filter to show all characters by gender
let filterAllCharactersByGender = document.getElementById("select-character");
filterAllCharactersByGender.addEventListener("change", filterByGender);

function filterByGender() {
  let selecEveryCharacter = document.getElementById("select-character").value;
  let filterGenders = filterGender(characters, selecEveryCharacter);
  filterGenders.forEach((everyCharacter) => {
    const div = document.createElement("div");
    div.className = "cards";
    const image = document.createElement("img");
    image.src = "incognitocards.png";
    image.className = "character";
    const name = document.createElement("h1");
    name.innerHTML = everyCharacter.name;
    const gender = document.createElement("p");
    gender.innerHTML = everyCharacter.gender;
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(gender);
    document.getElementById("info-characters").appendChild(div);
  });
}

//filter to show all characters by ancestry
let filterAllCharactersByAncestry = document.getElementById("select-character");
filterAllCharactersByAncestry.addEventListener("change", filterByAncestry);

function filterByAncestry() {
  let selecEveryCharacter = document.getElementById("select-character").value;
  let filterAncestries = filterAncestry(characters, selecEveryCharacter);
  filterAncestries.forEach((everyCharacter) => {
    const div = document.createElement("div");
    div.className = "cards";
    const image = document.createElement("img");
    image.src = "incognitocards.png";
    image.className = "character";
    const name = document.createElement("h1");
    name.innerHTML = everyCharacter.name;
    const ancestry = document.createElement("p");
    ancestry.innerHTML = everyCharacter.ancestry;
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(ancestry);
    document.getElementById("info-characters").appendChild(div);
  });
}

//Order characters from A-Z or Z-A
const orderCharacters = document.getElementById("order-characters");
const charactersContainer = document.getElementById("info-characters");
orderCharacters.addEventListener("change", function () {
  if (orderCharacters.value === "a-z") {
    orderAz(characters);
    charactersContainer.innerHTML = " ";
    //showCharacters();//
  } else if (orderCharacters.value === "z-a") {
    orderZa(characters);
    charactersContainer.innerHTML = " ";
    //showCharacters();
  }
});

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

//show the fun facts
funFacts.forEach((everyFunFact) => {
  const divFunFact = document.createElement("div");
  divFunFact.className = "funFact-cards";
  const type = document.createElement("h1");
  type.innerHTML = everyFunFact.type;
  const content = document.createElement("p");
  content.innerHTML = everyFunFact.content;
  divFunFact.appendChild(type);
  divFunFact.appendChild(content);
  document.getElementById("info-fun-facts").appendChild(divFunFact);
});

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
});*/
