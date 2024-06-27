// --------------------------------------
// Responsive Navigation for mobile


var navResponsive = document.getElementById("navigation");
var navCloseButton = document.getElementById("mobile-nav-close");

function navOpen() {
    if (navResponsive.className === "") {
        navResponsive.className += "mobile-open";
        navCloseButton.className += "visible";
    } else {
        navResponsive.className = "";
    }
}
function navClose() { // Closes responsive nav
    if (navResponsive.className === "mobile-open") {
        navResponsive.className = "";
        navCloseButton.className = "";
    }
}