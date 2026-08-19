(() => {
  const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 35 },
    { nombre: "Laura", edad: 42 }
  ];
  const primeraPersonaMayorDe30 = personas.find(persona => persona.edad > 30);

  console.log("Primera persona mayor de 30:", primeraPersonaMayorDe30);
})();
