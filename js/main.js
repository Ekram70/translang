let menu = document.querySelector(".hero-navbar-menu");
let dropdown = document.querySelector(".hero-navbar-list");

menu.addEventListener("click", function () {
  dropdown.classList.toggle("display-block");
});

let featureBox = document.querySelectorAll(".features-items-box");
let featureBoxIcon = document.querySelectorAll(".features-items-box-icon");
for (let i = 0; i < featureBox.length; i++) {
  let imgNumber = i + 1;
  featureBox[i].addEventListener("mouseenter", function () {
    featureBoxIcon[i].src = "images/feature-box-" + imgNumber + "-white.png";
  });
  featureBox[i].addEventListener("mouseleave", function () {
    featureBoxIcon[i].src = "images/feature-box-" + imgNumber + "-grad.png";
  });
}
