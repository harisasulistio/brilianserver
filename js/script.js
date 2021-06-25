// navbar
window.addEventListener("scroll", function () {
    var header = document.querySelector("nav");
    header.classList.toggle("active-header", window.scrollY > 100);
  });