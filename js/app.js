Js
function mostrarDatos(){
  let nombre = document.getElementById("nombre").value.trim();
  let edad = document.getElementById("edad").value.trim();
  let resultado = document.getElementById("resultado");

  if(nombre === "" || edad === ""){
    resultado.innerHTML = "⚠️ Por favor completa todos los campos.";
    resultado.style.background = "#ffe0d6";
    resultado.style.border = "2px solid #e34f26";
  } else {
    resultado.innerHTML =
      "<strong>✅ Datos capturados correctamente:</strong><br><br>" +
      "Nombre: " + nombre + "<br>" +
      "Edad: " + edad + " años";

    resultado.style.background = "#e8ffe8";
    resultado.style.border = "2px solid #2ecc71";
  }
}
