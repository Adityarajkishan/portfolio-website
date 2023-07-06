let navbar = document.querySelector('.navbar');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let navbarList = document.querySelector('.navbar-list ul');

hamburgerMenu.addEventListener('click', () => {
    navbarList.classList.toggle('show');
});

window.addEventListener('scroll', function () {
    let parallaxImage = document.querySelector('.parallax-image');
    let scrollPosition = window.pageYOffset;
    parallaxImage.style.transform = `translate3d(0, ${scrollPosition * 0.5}px, 0)`;
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 19) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});
