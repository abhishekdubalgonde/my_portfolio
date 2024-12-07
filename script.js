const hamburger = document.getElementById("hamburger");
const arrow = document.querySelector(".arrowd");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    arrow.classList.toggle("arrowup");
});
navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    arrow.classList.toggle("arrowup");
});
// Dynamic text with TypeIt library
const dynamicText = new TypeIt(".dynamic-text", {
  strings: ["Developer", "Designer", "UI/UX Enthusiast"],
  speed: 100,
  breakLines: false,
  nextStringDelay: 1500,
  loop: true,
}).go();
