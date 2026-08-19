(() => {
  const numeros = [2, 8, 15, 4];
  const todosSonPositivos = numeros.every(numero => numero > 0);

  console.log("¿Todos los números son positivos?:", todosSonPositivos);
})();
