
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

// ANIMATE ON SCROLL //
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
   console.log(entry);
   if (entry.isIntersecting) {
     entry.target.classList.add('show');
   } else {
     entry.target.classList.remove('show');
   }
  })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));