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

let blogBox = document.querySelectorAll(".blog-box-item");
for (let i = 0; i < blogBox.length; i++) {
  blogBox[i].addEventListener("mouseenter", function () {
    let blogBoxIcon = this.querySelectorAll(".blog-box-item-info-group img");
    blogBoxIcon[0].src = "images/user-icon-white.png";
    blogBoxIcon[1].src = "images/message-icon-white.png";
    blogBoxIcon[2].src = "images/like-icon-white.png";
  });
  blogBox[i].addEventListener("mouseleave", function () {
    let blogBoxIcon = this.querySelectorAll(".blog-box-item-info-group img");
    blogBoxIcon[0].src = "images/user-icon-grey.png";
    blogBoxIcon[1].src = "images/message-icon-grey.png";
    blogBoxIcon[2].src = "images/like-icon-grey.png";
  });
}
