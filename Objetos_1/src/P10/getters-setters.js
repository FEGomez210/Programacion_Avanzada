(() => {
  const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    _añoDePublicacion: 1967,

    get añoDePublicacion() {
      return this._añoDePublicacion;
    },

    set añoDePublicacion(nuevoAño) {
      this._añoDePublicacion = nuevoAño;
    }
  };

  libro.añoDePublicacion = 1968;
  console.log("Año de publicación actualizado:", libro.añoDePublicacion);
})();
