const hamburgerMenu = document.querySelector('.navbar__hamburger-menu');
const navLinks = document.querySelector('.navbar__links');
const heroInner= document.querySelector('.hero-section__inner');
hamburgerMenu.addEventListener('click', () =>{
    hamburgerMenu.classList.toggle('show');
    navLinks.classList.toggle('show');
})
