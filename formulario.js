var formulario = document.querySelector("#invitadoForm"); // Cambia "#form" por "#invitadoForm"

formulario.onsubmit = function(e) {
  e.preventDefault(); // Corrige el método para prevenir el envío del formulario

  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) { // Asegura que la edad sea inclusiva
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// ... El resto del código sin cambios ...

// Cambia "lista-de-invitados" por "listaInvitados"
var lista = document.getElementById("listaInvitados");

// Cambia "elemento-lista" por "elementoLista"
elementoLista.classList.add("elementoLista");

// ... El resto del código sin cambios ...

botonBorrar.onclick = function() {
  botonBorrar.parentNode.remove();
};
