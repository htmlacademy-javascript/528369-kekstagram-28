export const pickItemFromList = (list) => {
   const index = Math.floor(Math.random() * list.length);

  return list[index];
};

export const pickIntegerInrange = (min, max) => {
  const value = min + Math.random() * (max - min);
  return Math.round(value);
};
