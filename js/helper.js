// Circular text
var cirText = new CircleType(document.getElementById('circleText'));


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
  if (window.innerWidth <= 600) {
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

// Typing
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
}

setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};