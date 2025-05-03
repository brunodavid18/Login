function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!user || !pass) {
    message.style.color = "orange";
    message.textContent = "Por favor completa todos los campos.";
    return;
  }

  // Verificar si es el usuario administrador predeterminado
  if (user === "admin" && pass === "1234") {
    message.style.color = "green";
    message.textContent = "Login exitoso como administrador.";
    setTimeout(() => {
      window.location.href = "HTML/Sesion.html";
    }, 1000);
    return;
  }

  // Obtener usuarios desde localStorage
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Buscar coincidencia por nombre de usuario o email
  const usuarioEncontrado = usuarios.find(
    u => (u.username === user || u.email === user) && u.password === pass
  );

  if (usuarioEncontrado) {
    message.style.color = "green";
    message.textContent = "Login exitoso.";
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
    setTimeout(() => {
      window.location.href = "HTML/Sesion.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Usuario o contraseña incorrectos.";
  }
}

function togglePassword() {
  const passwordField = document.getElementById("password");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function register() {
  window.location.href = "HTML/Registro.html";
}
