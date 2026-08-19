(() => {
  function generarToken(usuario) {
    const encabezado = btoa(JSON.stringify({ alg: "none", typ: "JWT" }));
    const carga = btoa(JSON.stringify(usuario));
    return `${encabezado}.${carga}.firma-simulada`;
  }

  console.log("Token simulado:", generarToken({ id: 1, nombre: "Ana" }));
})();
