(() => {
  async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const usuarios = await respuesta.json();
    console.log("Usuarios obtenidos:", usuarios);
    return usuarios;
  }

  obtenerUsuarios().catch(error => console.error("No se pudieron obtener los usuarios:", error));
})();
