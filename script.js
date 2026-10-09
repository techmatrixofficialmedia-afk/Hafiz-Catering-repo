const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navbar-links');

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('active');
  });
  const closeMenuBtn = document.querySelector('.close-menu');

closeMenuBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
  hamburger.setAttribute('aria-expanded', false);
  body.classList.remove('menu-open');
});