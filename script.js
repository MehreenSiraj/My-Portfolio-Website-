// Show or hide the navigation menu when the hamburger icon is clicked
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('visible');
});

// Smooth scroll to sections when links in the navigation menu are clicked
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Change the background color of the header when the user scrolls down the page
const header = document.querySelector('header');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const heroHeight = hero.offsetHeight;
  if (scrollPosition > heroHeight) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
