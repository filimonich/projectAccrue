(() => {
  // открытие и закрытие меню и меню-профиля
  const hamburgerButton = document.querySelector('.hamburger-js');
  const menuElement = document.querySelector('.header__menu');

  function toggleMainMenu() {
    hamburgerButton.classList.toggle('hamburger--active');
    menuElement.classList.toggle('header__menu--active');
    menuElement.classList.add('header__menu--close');
    setTimeout(() => {
      menuElement.classList.remove('header__menu--close');
    }, 2000);
  }

  function closeMainMenu() {
    hamburgerButton.classList.remove('hamburger--active');
    menuElement.classList.remove('header__menu--active');
    setTimeout(() => {
      menuElement.classList.remove('header__menu--close');
    }, 600);
  }

  function handleMainMenuItemClick(event) {
    if (event.target.classList.contains('menu__link')) {
      toggleMainMenu();
    }
  }

  function handleDocumentClick(event) {
    if (event.target !== hamburgerButton) {
      closeMainMenu();
    }
  }

  menuElement.addEventListener('click', handleMainMenuItemClick);
  hamburgerButton.addEventListener('click', toggleMainMenu);
  document.addEventListener('click', handleDocumentClick);
})();
