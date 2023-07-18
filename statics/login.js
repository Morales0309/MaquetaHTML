document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Aquí puedes agregar la lógica de autenticación y verificación de credenciales
    
    if (username === "admin" && password === "12345") {
      // Credenciales válidas, redirigir al usuario a la página principal
      window.location.href = "principal.html";
    } else {
      // Credenciales inválidas, mostrar mensaje de error
      alert("Usuario o contraseña incorrectos");
    }
  });
  