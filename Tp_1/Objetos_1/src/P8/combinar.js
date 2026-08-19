(() => {
  const persona1 = {
    nombre: "Fernando",
    edad: 25
  };
  const persona2 = {
    ciudad: "Springfield",
    profesion: "Programador"
  };

  const personaCombinada = Object.assign({}, persona1, persona2);
  console.log("Personas combinadas:", personaCombinada);
})();
