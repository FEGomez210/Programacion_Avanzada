(() => {
  function sumarElementos(numeros) {
    return numeros.reduce((suma, numero) => suma + numero, 0);
  }

  console.log("Suma de elementos:", sumarElementos([1, 2, 3, 4, 5]));
})();
