(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const contactsElement = document.querySelector('.contacts-js');
    const descriptionElement = contactsElement.querySelector(
      '.contacts__description'
    );

    contactsElement.addEventListener('click', () => {
      if (
        descriptionElement.style.display === 'none' ||
        descriptionElement.style.display === ''
      ) {
        descriptionElement.style.display = 'block';
        descriptionElement.style.animation = 'fadeIn .3s forwards'; // Добавляем анимацию проявления
      } else {
        descriptionElement.style.animation = 'fadeOut .3s forwards'; // Добавляем анимацию затухания
        // Ждем окончания анимации, прежде чем скрыть элемент
        setTimeout(() => {
          descriptionElement.style.display = 'none';
        }, 1000);
      }
    });
  });
})();
