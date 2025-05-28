const menuIcon = document.getElementById('menu-icon');
const menuMobile = document.getElementById('menu-mobile');

menuIcon.addEventListener('click', () => {
  if (window.innerWidth <= 820) {
    menuMobile.classList.toggle('show');
  }
});

document.addEventListener('click', (e) => {
  if (window.innerWidth <= 820 &&
      !menuIcon.contains(e.target) &&
      !menuMobile.contains(e.target)) {
    menuMobile.classList.remove('show');
  }
});