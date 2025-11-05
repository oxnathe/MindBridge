
  const menuToggle = document.querySelector('.header__menu');
  const navMenu = document.querySelector('.header__nav');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

