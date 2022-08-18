

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
       const filterByHouse = data.filter((element) => {
         return element.house === condition;
       });
       return filterByHouse;
     };

//filtrar por genero
export const filterGender = (data, condition) => {
       const filterByGender = data.filter((element) => {
         return element.gender === condition;
       });
       return filterByGender;
     };

//filtrar por pureza 
export const filterAncestry = (data, condition) => {
       const filterByAncestry = data.filter((element) => {
         return element.ancestry === condition;
       });
       return filterByAncestry;
     };
