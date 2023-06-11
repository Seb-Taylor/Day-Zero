// HAMBURGER MENU================================================
var menuToggle = document.getElementById('menu-toggle');
var menu = document.getElementById('menu');
var dropDown = document.getElementById('dropdownIcon');
var closeIcon = document.getElementById('closeIcon');

//show menu
menuToggle.addEventListener('click', function() {
    menu.classList.add('show');
});

//hide menu
closeIcon.addEventListener('click', function() {
    menu.classList.remove('show'); 
});

//hide menu when clicking outside of it
window.onclick = function(event) {
  if (!event.target.matches('#dropdownIcon')) {
    if (menu.classList.contains('show')) { //if menu is showing
      menu.classList.remove('show'); //hide menu
      dropDown.classList.remove('cross');
    }
  }
}

// NAVIGATION ===================================================
let languagesSymbol = document.getElementById('languagesSymbol');
languagesSymbol.addEventListener('click', function() {
    document.location='languages.html';
});