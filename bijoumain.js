// --------------------------------------
// Responsive Navigation for mobile

var navResponsive = document.getElementById("navigation");
var menuSVG = document.querySelector("svg.nav-menu");

function toggleNav() {
  navResponsive.classList.toggle("menu-open");
  menuSVG.classList.toggle("menu-open");
}