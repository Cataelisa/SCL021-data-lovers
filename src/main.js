import data from "./data/harrypotter/harry.js";
import {
  filterData,
  filterGender,
  filterAncestry,
  orderAz,
  orderZa,
  filterSpellType,
  orderPotionsAz,
  orderPotionsZa,
  orderSpellsZa,
  orderSpellsAz,
} from "./data.js";

// Go to characters
function goToCharacters() {
  let characters = document.getElementById("second-page");
  characters.style.display = "block";
  let allCharacters = document.getElementById("all-characters");
  allCharacters.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}
let showCharacters = document.getElementById("personajes");
showCharacters.addEventListener("click", goToCharacters);

// Go to fun facts
function goToFunFacts() {
  let funFact = document.getElementById("second-page");
  funFact.style.display = "block";
  let divInfoFunFacts = document.getElementById("info-fun-facts");
  divInfoFunFacts.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}
let showFunFact = document.getElementById("datos-curiosos");
showFunFact.addEventListener("click", goToFunFacts);

// Go to books
function goToBooks() {
  let books = document.getElementById("second-page");
  books.style.display = "block";
  let divInfoBooks = document.getElementById("all-books");
  divInfoBooks.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}
let showBooks = document.getElementById("libros-de-la-saga");
showBooks.addEventListener("click", goToBooks);

// Go to spells
function goToSpells() {
  let spells = document.getElementById("second-page");
  spells.style.display = "block";
  let divInfoSpells = document.getElementById("all-spells");
  divInfoSpells.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}
let showSpells = document.getElementById("hechizos");
showSpells.addEventListener("click", goToSpells);

// Go to potions
function goToPotions() {
  let potions = document.getElementById("second-page");
  potions.style.display = "block";
  let divInfoPotions = document.getElementById("all-potions");
  divInfoPotions.style.display = "block";
  let frontPage = document.getElementById("front-page");
  frontPage.style.display = "none";
}
let showPotions = document.getElementById("pocimas");
showPotions.addEventListener("click", goToPotions);

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

//clear main characters and after each filter
let clear = document.getElementById("select-character");
clear.addEventListener("change", clearFilter);

function clearFilter() {
  document.getElementById("info-characters").innerHTML = "";
  document.getElementById("info-main-characters").innerHTML = "";
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

//clear after each spell filter
let clearSpell = document.getElementById("select-spells");
clearSpell.addEventListener("change", clearSpellFilter);

function clearSpellFilter() {
  document.getElementById("info-spells").innerHTML = " ";
}

//filter to show the spells by type
let filterSpellsByType = document.getElementById("select-spells");
filterSpellsByType.addEventListener("change", filterByType);

function filterByType() {
  let selectSpells = document.getElementById("select-spells").value;
  let filterType = filterSpellType(spells, selectSpells);
  filterType.forEach((everySpells) => {
    const divSpells = document.createElement("div");
    divSpells.className = "spells-cards";
    const nameSpells = document.createElement("h1");
    nameSpells.innerHTML = everySpells.name;
    const pronunciation = document.createElement("p");
    pronunciation.innerHTML = everySpells.pronunciation;
    const spellType = document.createElement("p");
    spellType.innerHTML = everySpells.spell_type;
    const descriptionSpells = document.createElement("p");
    descriptionSpells.innerHTML = everySpells.description;
    const mention = document.createElement("p");
    mention.innerHTML = everySpells.mention;
    divSpells.appendChild(nameSpells);
    divSpells.appendChild(pronunciation);
    divSpells.appendChild(spellType);
    divSpells.appendChild(descriptionSpells);
    divSpells.appendChild(mention);
    document.getElementById("info-spells").appendChild(divSpells);
  });
}

//Order characters from A-Z or Z-A
const orderCharacters = document.getElementById("order-characters");
const charactersContainer = document.getElementById("info-characters");
orderCharacters.addEventListener("change", function () {
  if (orderCharacters.value === "a-z") {
    orderAz(characters);
    charactersContainer.innerHTML = " ";
    filterByHouse();
    filterByGender();
    filterByAncestry();
  } else if (orderCharacters.value === "z-a") {
    orderZa(characters);
    charactersContainer.innerHTML = " ";
    filterByHouse();
    filterByGender();
    filterByAncestry();
  }
});

//Order spells from A-Z or Z-A
const orderSpells = document.getElementById("order-spells");
const spellsContainer = document.getElementById("info-spells");
orderSpells.addEventListener("change", function () {
  if (orderSpells.value === "a-z") {
    orderSpellsAz(spells);
    spellsContainer.innerHTML = " ";
    filterByType();
  } else if (orderSpells.value === "z-a") {
    orderSpellsZa(spells);
    spellsContainer.innerHTML = " ";
    filterByType();
  }
});

//Order potions from A-Z or Z-A
const orderPotions = document.getElementById("select-order-potions");
const potionsContainer = document.getElementById("info-potions");
orderPotions.addEventListener("change", function () {
  if (orderPotions.value === "ascendente") {
    orderPotionsAz(potions);
    potionsContainer.innerHTML = " ";
    allPotions();
  } else if (orderPotions.value === "descendente") {
    orderPotionsZa(potions);
    potionsContainer.innerHTML = " ";
    allPotions();
  }
});

//show books
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
  divBooks.appendChild(description);
  document.getElementById("info-books").appendChild(divBooks);
});

//show fun facts
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

//show potions
potions.forEach((everyPotions) => {
  const divPotions = document.createElement("div");
  divPotions.className = "potions-cards";
  const namePotions = document.createElement("h1");
  namePotions.innerHTML = everyPotions.name;
  const descriptionPotions = document.createElement("p");
  descriptionPotions.innerHTML = everyPotions.description;
  divPotions.appendChild(namePotions);
  divPotions.appendChild(descriptionPotions);
  document.getElementById("info-potions").appendChild(divPotions);
});
function allPotions() {
  potions.forEach((everyPotions) => {
    const divPotions = document.createElement("div");
    divPotions.className = "potions-cards";
    const namePotions = document.createElement("h1");
    namePotions.innerHTML = everyPotions.name;
    const descriptionPotions = document.createElement("p");
    descriptionPotions.innerHTML = everyPotions.description;
    divPotions.appendChild(namePotions);
    divPotions.appendChild(descriptionPotions);
    document.getElementById("info-potions").appendChild(divPotions);
  });
}

//show spells
spells.forEach((everySpells) => {
  const divSpells = document.createElement("div");
  divSpells.className = "spells-cards";
  const nameSpells = document.createElement("h1");
  nameSpells.innerHTML = everySpells.name;
  const pronunciation = document.createElement("p");
  pronunciation.innerHTML = everySpells.pronunciation;
  const spellType = document.createElement("p");
  spellType.innerHTML = everySpells.spell_type;
  const descriptionSpells = document.createElement("p");
  descriptionSpells.innerHTML = everySpells.description;
  const mention = document.createElement("p");
  mention.innerHTML = everySpells.mention;
  divSpells.appendChild(nameSpells);
  divSpells.appendChild(pronunciation);
  divSpells.appendChild(spellType);
  divSpells.appendChild(descriptionSpells);
  divSpells.appendChild(mention);
  document.getElementById("info-spells").appendChild(divSpells);
});
