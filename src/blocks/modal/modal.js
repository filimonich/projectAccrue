(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.header__list--login');
    const closeButton = document.querySelector('.modal__close-button');
    const modalLogin = document.querySelector('.modal__login');
    const modalContent = document.querySelector('.modal__content--login');
    const body = document.body;

    openButton.addEventListener('click', () => {
      console.log('hello');
      modalLogin.style.display = 'block';
      body.style.overflow = 'hidden';
    });

    closeButton.addEventListener('click', () => {
      modalLogin.style.display = 'none';
      body.style.overflow = '';
    });

    document.addEventListener('click', e => {
      if (!modalContent.contains(e.target) && !openButton.contains(e.target)) {
        modalLogin.style.display = 'none';
        body.style.overflow = '';
      }
    });
  });
})();
