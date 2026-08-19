(() => {
  function validarFormulario(formulario) {
    const campos = [formulario.nombre, formulario.email, formulario.password];
    return campos.every(campo => typeof campo === "string" && campo.trim() !== "");
  }

  console.log("Formulario válido:", validarFormulario({ nombre: "Ana", email: "ana@example.com", password: "secreto" }));
  console.log("Formulario inválido:", validarFormulario({ nombre: "", email: "ana@example.com", password: "secreto" }));
})();
