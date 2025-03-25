function toggleSidebar() {
  document.body.classList.toggle("open");
  document.querySelector(".hamburger").classList.toggle("active");
  document.querySelector(".sidebar").classList.toggle("active");
  document.querySelector(".backdrop").classList.toggle("active");
}