

// Para acceder al boton menu
const boton = document.querySelector(".nav-button");
boton.addEventListener('click', clickMenu);
// Funcion click Menu
function clickMenu() {
  const menu = document.querySelector('.miniu');
  menu.classList.add('show')
}

// Para acceder al boton salir de menu
const botonSalir = document.querySelector(".exit-menu");
botonSalir.addEventListener('click', clickMenu2);
// Funcion click Menu
function clickMenu2() {
  const menu2 = document.querySelector('.miniu');
  menu2.classList.remove('show')
}