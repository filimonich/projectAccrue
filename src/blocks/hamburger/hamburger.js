(() => {
  const hamburgerButton = document.querySelector('.hamburger-js');
  const menuElement = document.querySelector('.header__menu');

  const toggleMainMenu = () => {
    hamburgerButton.classList.toggle('hamburger--active');
    menuElement.classList.toggle('header__menu--active');
    menuElement.classList.add('header__menu--close');
    setTimeout(() => {
      menuElement.classList.remove('header__menu--close');
    }, 2000);
  };

  const closeMainMenu = () => {
    hamburgerButton.classList.remove('hamburger--active');
    menuElement.classList.remove('header__menu--active');
    setTimeout(() => {
      menuElement.classList.remove('header__menu--close');
    }, 600);
  };

  const handleMainMenuItemClick = e => {
    if (e.target.classList.contains('menu__link')) {
      toggleMainMenu();
    }
  };

  const handleDocumentClick = e => {
    if (e.target !== hamburgerButton) {
      closeMainMenu();
    }
  };

  menuElement.addEventListener('click', handleMainMenuItemClick);
  hamburgerButton.addEventListener('click', toggleMainMenu);
  document.addEventListener('click', handleDocumentClick);
})();
