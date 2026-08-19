(() => {
  function filtrarMayoresDe(numeros, referencia) {
    return numeros.filter(numero => numero > referencia);
  }

  console.log("Mayores de 5:", filtrarMayoresDe([2, 5, 7, 10, 3], 5));
})();
