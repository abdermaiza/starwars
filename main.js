// Burger menu mobile
let toggle = document.getElementById('nav-toggle');
let menu = document.getElementById('nav-menu');
let body = document.querySelector('body');
toggle.onclick = function() {
  toggle.classList.toggle('is-active');
  menu.classList.toggle('is-active');
  body.classList.toggle('body_unscroll');
}
menu.onclick = function() {
  toggle.classList.remove('is-active');
  menu.classList.remove('is-active');
  body.classList.remove('body_unscroll');
}
window.addEventListener('keydown', function (e) {
  if (e.key === "Escape" || e.key ==="Esc") {
    toggle.classList.remove('is-active');
    menu.classList.remove('is-active');
    body.classList.remove('body_unscroll');
  }
})

// Parallax effect on logo image
let logo = document.getElementById('hero-logo');
window.addEventListener('scroll', function () {
  if(window.scrollY > 30) {
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    logo.style.transform = `translateY(-${0.4 * val}%)`;

  }
})