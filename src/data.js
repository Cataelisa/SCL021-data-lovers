// Filtrar personajes por casa
export const filterData = (data, condition) => {
  const filterByHouse = data.filter((element) => {
    return element.house === condition;
  });
  return filterByHouse;
};

//filtrar personajes por genero
export const filterGender = (data, condition) => {
  const filterByGender = data.filter((element) => {
    return element.gender === condition;
  });
  return filterByGender;
};

//filtrar personajes por pureza
export const filterAncestry = (data, condition) => {
  const filterByAncestry = data.filter((element) => {
    return element.ancestry === condition;
  });
  return filterByAncestry;
};

//Ordenar personajes de la A - Z
export const orderAz = (characters) => {
  let orderByAz = characters.sort((a, b) => a.name.localeCompare(b.name));
  return orderByAz;
};

//Ordenar personajes de la Z - A
export const orderZa = (characters) => {
  let orderByZa = characters.sort((a, b) => b.name.localeCompare(a.name));
  return orderByZa;
};
