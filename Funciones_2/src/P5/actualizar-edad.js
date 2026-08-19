(() => {
  function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
  }

  const persona = { nombre: "Fernando", edad: 25 };
  console.log("Persona antes de actualizar:", persona);
  actualizarEdad(persona, 26);
  console.log("Persona después de actualizar:", persona);
})();
