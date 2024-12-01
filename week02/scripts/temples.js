const hamburgerMenuIcon = document.querySelector("#menu");
const navLinks = document.querySelector(".nav-list");
hamburgerMenuIcon.addEventListener("click", () => {
  hamburgerMenuIcon.classList.toggle("show");
  navLinks.classList.toggle("show");
});
