(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const contacts = document.querySelector('.contacts-js');
    const description = contacts.querySelector('.contacts__description');

    contacts.addEventListener('click', () => {
      if (
        description.style.display === 'none' ||
        description.style.display === ''
      ) {
        description.style.zIndex = '10';
        description.style.display = 'flex';
        description.style.animation = 'fadeIn .3s forwards'; // Добавляем анимацию проявления
      } else {
        description.style.zIndex = '-1';
        description.style.animation = 'fadeOut .3s forwards'; // Добавляем анимацию затухания
        // Ждем окончания анимации, прежде чем скрыть элемент
        setTimeout(() => {
          description.style.display = 'none';
        }, 1000);
      }
    });
  });
})();
