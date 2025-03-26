
const hamburgerMenu = document.querySelector('.js-ham-menu');
const navContainer = document.querySelector('.js-nav-container');
const backdrop = document.querySelector('.backdrop');

hamburgerMenu.addEventListener('click', () => {
  navContainer.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
  backdrop.classList.toggle('active');
});

backdrop.addEventListener('click', () => {
  navContainer.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
  backdrop.classList.toggle('active');
})