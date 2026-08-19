(() => {
  function crearMultiplicador(x) {
    return numero => numero * x;
  }

  const multiplicarPorTres = crearMultiplicador(3);
  console.log("3 multiplicado por 4:", multiplicarPorTres(4));
  console.log("3 multiplicado por 10:", multiplicarPorTres(10));
})();
