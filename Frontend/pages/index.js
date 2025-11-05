
  const menuToggle = document.querySelector('.header__menu');
  const navMenu = document.querySelector('.menu__nav');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

