
import data from "./data/harrypotter/harry.js";
import {filterData} from "./data.js";
 
// Go the characters
  function goToCharacters() {
    let characters = document.getElementById("characters");
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

//"filter" to show all characters

let filterAllCharacters = document.getElementById("select-character");
filterAllCharacters.addEventListener("change", filterAllCharacter);

function filterAllCharacter() {
    let selecEveryCharacter = document.getElementById("select-character").value;
    let filterHouse = filterData(characters, selecEveryCharacter);
    console.log(filterHouse);
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

// Go to books
function goToBooks() {
  let books = document.getElementById("characters");
  books.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}
  let showBooks = document.getElementById("libros-de-la-saga");
  showBooks.addEventListener("click", goToBooks);

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



