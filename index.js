
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
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
   console.log(entry);
   if (entry.isIntersecting) {
     entry.target.classList.add('show-2');
   } else {
     entry.target.classList.remove('show-2');
   }
  })
})
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
   console.log(entry);
   if (entry.isIntersecting) {
     entry.target.classList.add('show-3');
   } else {
     entry.target.classList.remove('show-3');
   }
  })
})
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements2 = document.querySelectorAll('.hidden-2');
const hiddenElements3 = document.querySelectorAll('.hidden-3');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer2.observe(el));
hiddenElements3.forEach((el) => observer3.observe(el));

// 3D SPHERE ANIMATION //
const sphere = document.getElementById('sphere');
const rows = []
for (let i = 0; i < 180; i += 10) {
   rows.push(`<div class ="line" style= "transform: rotateY(${i}deg);"></div>`);
}

sphere.innerHTML = rows.join("");