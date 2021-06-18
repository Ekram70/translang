let menu = document.querySelector(".hero-navbar-menu");
let dropdown = document.querySelector(".hero-navbar-list");

menu.addEventListener("click", function () {
  dropdown.classList.toggle("display-block");
});
