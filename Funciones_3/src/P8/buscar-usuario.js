(() => {
  function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
  }

  const usuarios = [
    { name: "Leanne Graham", email: "leanne@example.com" },
    { name: "Ervin Howell", email: "ervin@example.com" }
  ];

  console.log("Usuario encontrado:", buscarUsuarioPorEmail(usuarios, "ervin@example.com"));
})();
