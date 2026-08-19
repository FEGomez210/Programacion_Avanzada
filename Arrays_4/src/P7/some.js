(() => {
  const numeros = [3, 7, 12, 4];
  const hayNumeroMayorDe10 = numeros.some(numero => numero > 10);

  console.log("¿Hay un número mayor que 10?:", hayNumeroMayorDe10);
})();
