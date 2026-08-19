(() => {
  function mapearUsuarios(usuarios) {
    return usuarios.map(({ name, email }) => ({ name, email }));
  }

  const usuarios = [
    { name: "Leanne Graham", email: "leanne@example.com", id: 1 },
    { name: "Ervin Howell", email: "ervin@example.com", id: 2 }
  ];

  console.log("Usuarios transformados:", mapearUsuarios(usuarios));
})();
