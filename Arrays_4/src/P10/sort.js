(() => {
  const palabras = ["pera", "manzana", "banana", "naranja"];
  palabras.sort((palabraA, palabraB) => palabraA.localeCompare(palabraB));

  console.log("Palabras ordenadas:", palabras);
})();
