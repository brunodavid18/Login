// Escucha el envío del formulario
document.getElementById("registerForm").addEventListener("submit", registerUser);

function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById("newUsername").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("newPassword").value.trim();
  const message = document.getElementById("registerMessage");

  // Validación básica
  if (!username || !email || !password) {
    showMessage("Todos los campos son obligatorios.", "orange");
    return;
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage("El formato del correo no es válido.", "orange");
    return;
  }

  // Validar longitud de contraseña
  if (password.length < 8) {
    showMessage("La contraseña debe tener al menos 8 caracteres.", "orange");
    return;
  }

  // Obtener usuarios existentes desde localStorage
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar si el correo ya está registrado
  if (usuarios.some(user => user.email === email)) {
    showMessage("Este correo ya está registrado.", "red");
    return;
  }

  // Crear nuevo usuario
  const nuevoUsuario = {
    username: username,
    email: email,
    password: password // ⚠️ Solo para pruebas, no guardar contraseñas reales así
  };

  // Agregar y guardar en localStorage
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  showMessage("Cuenta registrada correctamente.", "green");

  // Limpiar formulario
  document.getElementById("registerForm").reset();
}

// Mostrar u ocultar contraseña
function toggleNewPassword() {
  const passwordField = document.getElementById("newPassword");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// Redirigir al login
function goToLogin() {
  window.location.href = "../Index.html";
}

// Formatear fecha automáticamente
document.getElementById("FechaNacimiento").addEventListener("input", function (e) {
  let input = e.target.value;
  input = input.replace(/\D/g, '');

  if (input.length >= 3 && input.length <= 4) {
    input = input.slice(0, 2) + '/' + input.slice(2);
  } else if (input.length > 4 && input.length <= 8) {
    input = input.slice(0, 2) + '/' + input.slice(2, 4) + '/' + input.slice(4);
  }

  e.target.value = input.slice(0, 10);
});

// Mostrar mensajes de forma centralizada
function showMessage(msg, color) {
  const message = document.getElementById("registerMessage");
  message.textContent = msg;
  message.style.color = color;
}