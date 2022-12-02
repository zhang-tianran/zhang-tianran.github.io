// Nav bar
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top")
  } else {
    navbar.classList.remove("fixed-top");
  }
}
var navContainer = document.getElementById("nav-container");
window.onresize = function() {
  if (window.innerWidth <= 640) {
    navContainer.classList.add("justify-content-center");
    navContainer.classList.remove("justify-content-end");
  } else {
    navContainer.classList.add("justify-content-end");
    navContainer.classList.remove("justify-content-center");
  }
}

// Back to top
const backToTopButton = document.getElementById("back-top");
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};
backToTopButton.addEventListener("click", goToTop);