(() => {
  function procesarArray(array, funcion) {
    return array.map(funcion);
  }

  const numeros = [1, 2, 3, 4, 5];
  const multiplicarPorDos = numero => numero * 2;
  const resultado = procesarArray(numeros, multiplicarPorDos);

  console.log("Array multiplicado por 2:", resultado);
})();
