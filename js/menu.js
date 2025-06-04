const menuToggle = document.getElementById('menuToggle');
const menuLinks = document.getElementById('menuLinks');

menuToggle.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});