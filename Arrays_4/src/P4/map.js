(() => {
  function elevarAlCuadrado(numeros) {
    return numeros.map(numero => numero ** 2);
  }

  console.log("Números al cuadrado:", elevarAlCuadrado([1, 2, 3, 4]));
})();
