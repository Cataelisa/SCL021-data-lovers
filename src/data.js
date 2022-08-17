

//filter to show all the characters

//Filtrar por Muggle
//Filtrar por Sangre pura
//Filtrar por Hombre
//Filtrar por Mujer
//Ordenar por A - Z
//Ordenar por Z - A
//Ordenar por Menor a mayor








// Filtrar por casa
export const filterData = (data, condition) => {
       const filterAllCharacters = data.filter(element => {
       return element.house === condition;
})
return filterAllCharacters
};



