(() => {
  function tienePropiedad(objeto, propiedad) {
    return Object.prototype.hasOwnProperty.call(objeto, propiedad);
  }

  const producto = {
    nombre: "Teclado mecánico",
    precio: 75.99
  };

  console.log("Tiene precio:", tienePropiedad(producto, "precio"));
  console.log("Tiene disponible:", tienePropiedad(producto, "disponible"));
})();
