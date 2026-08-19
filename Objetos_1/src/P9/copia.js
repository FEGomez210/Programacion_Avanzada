(() => {
  const estudiante = {
    nombre: "Gómez, Fernando Emilio",
    edad: 25,
    direccion: {
      calle: "Calle Siempreviva 123",
      ciudad: "Springfield",
      pais: "USA"
    }
  };

  const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));
  copiaEstudiante.direccion.ciudad = "Buenos Aires";

  console.log("Estudiante original:", estudiante);
  console.log("Copia modificada:", copiaEstudiante);
})();
