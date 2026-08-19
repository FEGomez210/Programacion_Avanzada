(() => {
  async function enviarDatos(data) {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const resultado = await respuesta.json();
    console.log("Respuesta de la API:", resultado);
    return resultado;
  }

  enviarDatos({ title: "Nuevo post", body: "Contenido de prueba", userId: 1 })
    .catch(error => console.error("No se pudieron enviar los datos:", error));
})();
