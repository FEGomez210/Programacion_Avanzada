(() => {
  function actualizarUsuario(usuario, cambios) {
    return { ...usuario, ...cambios };
  }

  const usuario = { id: 1, nombre: "Ana", email: "ana@example.com" };
  const usuarioActualizado = actualizarUsuario(usuario, { nombre: "Ana Gómez", email: "ana.gomez@example.com" });
  console.log("Usuario actualizado:", usuarioActualizado);
})();
