(() => {
  function crearPersona(nombre, edad) {
    return { nombre, edad };
  }

  const persona = crearPersona("Fernando", 25);
  console.log("Persona creada:", persona);
})();
