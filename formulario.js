// Nota: es preferible usar let o const en lugar de var para declarar una variable, sin embargo usar var no es necesariamente incorrecto, solo anticuado.

let formulario = document.querySelector("#invitadoForm"); // Se cambia "#form" por "#invitadoForm"

formulario.onsubmit = function(e) {
  e.preventDefault(); // Se corrige el método para prevenir el envío del formulario

  let n = formulario.elements[0];
  let e = formulario.elements[1];
  let na = formulario.elements[2];

  let nombre = n.value;
  let edad = e.value;

  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) { // Se asegura que la edad sea inclusiva
    agregarInvitado(nombre, edad, nacionalidad);
  }
};


// Se cambia "lista-de-invitados" por "listaInvitados" para camelCase
const lista = document.getElementById("listaInvitados");

// Se cambia "elemento-lista" por "elementoLista" para hacer uso de camelCase
elementoLista.classList.add("elementoLista");

botonBorrar.onclick = function() {
  botonBorrar.parentNode.remove();
};

