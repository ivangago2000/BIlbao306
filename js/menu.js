// js/menu.js

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('menuToggle');
  const menuLinks = document.getElementById('menuLinks');

  toggleButton.addEventListener('click', function () {
    menuLinks.classList.toggle('active');
  });
});
