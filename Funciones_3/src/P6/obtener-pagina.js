(() => {
  function obtenerPagina(datos, numeroPagina) {
    const elementosPorPagina = 5;
    const inicio = (numeroPagina - 1) * elementosPorPagina;
    return datos.slice(inicio, inicio + elementosPorPagina);
  }

  const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  console.log("Página 2:", obtenerPagina(datos, 2));
})();
