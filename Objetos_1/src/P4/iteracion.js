(() => {
  const producto = {
    nombre: "Teclado mecánico",
    precio: 75.99,
    disponible: true
  };

  for (const propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
  }
})();
