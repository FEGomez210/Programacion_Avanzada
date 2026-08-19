(() => {
  async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    return respuesta.json();
  }

  async function imprimirNombresDeUsuarios() {
    const usuarios = await obtenerUsuarios();
    const nombres = usuarios.map(usuario => usuario.name);
    console.log("Nombres de usuarios:", nombres);
    return nombres;
  }

  imprimirNombresDeUsuarios().catch(error => console.error("No se pudieron obtener los nombres:", error));
})();
