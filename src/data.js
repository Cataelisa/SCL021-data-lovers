//Filtar por la casa Griyffindor
//Filtar por la casa Hufflepuff
//Filtar por la casa Ravenclaw
//Filtar por la casa Slytherin

const filterHouse = (characters, house) => {
  return characters.filter((character) => character.house === house);
};

//Filtrar por Muggle
//Filtrar por Sangre pura
//Filtrar por Hombre
//Filtrar por Mujer
//Ordenar por A - Z
//Ordenar por Z - A
//Ordenar por Menor a mayor

export { filterHouse };
