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

// Filtrar hechizos por tipo de hechizo
export const filterSpellType = (data, condition) => {
  const filterBySpellType = data.filter((element) => {
    return element.spell_type === condition;
  });
  return filterBySpellType;
};

//Ordenar hechizos de la A - Z
export const orderSpellsAz = (spells) => {
  let orderSpellsByAz = spells.sort((a, b) => a.name.localeCompare(b.name));
  return orderSpellsByAz;
};

//Ordenar hechizos de la Z - A
export const orderSpellsZa = (spells) => {
  let orderSpellsByZa = spells.sort((a, b) => b.name.localeCompare(a.name));
  return orderSpellsByZa;
};

//Ordenar pociones de la A - Z
export const orderPotionsAz = (potions) => {
  let orderPotionsByAz = potions.sort((a, b) => a.name.localeCompare(b.name));
  return orderPotionsByAz;
};

//Ordenar pociones de la Z - A
export const orderPotionsZa = (potions) => {
  let orderPotionsByZa = potions.sort((a, b) => b.name.localeCompare(a.name));
  return orderPotionsByZa;
};
