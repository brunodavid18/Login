function CerrarSesion() {
    window.location.href = "../Index.html";
  }

  window.addEventListener("DOMContentLoaded", function () {
    const saludo = document.getElementById("saludo");
    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
  
    if (usuario && usuario.username) {
      saludo.textContent = `Hola, ${usuario.username}`;
    } else {
      saludo.textContent = "Hola, invitado";
    }
  });
  
  function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    window.location.href = "../Index.html";
  }