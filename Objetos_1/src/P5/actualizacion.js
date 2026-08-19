(() => {
  const producto = {
    nombre: "Teclado mecánico",
    precio: 75.99,
    disponible: true
  };

  producto.precio = 89.99;
  console.log("Producto actualizado:", producto);
})();
