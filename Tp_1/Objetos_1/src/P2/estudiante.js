// Definición del objeto estudiante con una dirección anidada
const estudiante = {
  nombre: "Gómez, Fernando Emilio",
  edad: 25,
  direccion: {
    calle: "Calle Siempreviva 123",
    ciudad: "Springfield",
    pais: "USA"
  }
};

// Imprimir la dirección completa del estudiante
console.log("Dirección completa del estudiante:");
console.log("  Calle:", estudiante.direccion.calle);
console.log("  Ciudad:", estudiante.direccion.ciudad);
console.log("  País:", estudiante.direccion.pais);
console.log(`  ${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`);
