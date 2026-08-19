(() => {
  const usuarioPredefinido = {
    usuario: "admin",
    contraseña: "1234"
  };

  function autenticarUsuario(credenciales) {
    return credenciales.usuario === usuarioPredefinido.usuario
      && credenciales.contraseña === usuarioPredefinido.contraseña;
  }

  console.log("Autenticación correcta:", autenticarUsuario({ usuario: "admin", contraseña: "1234" }));
  console.log("Autenticación incorrecta:", autenticarUsuario({ usuario: "admin", contraseña: "xxxx" }));
})();
