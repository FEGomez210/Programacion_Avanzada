(() => {
  const producto = {
    nombre: "Teclado mecánico",
    precio: 75.99,
    disponible: true
  };

  console.log("Antes de eliminar:", producto);
  delete producto.disponible;
  console.log("Después de eliminar:", producto);
})();
