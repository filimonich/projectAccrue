(() => {
  const mobileResolution = 799;
  const isMobileResolution = () => window.innerWidth <= mobileResolution;

  if (isMobileResolution()) {
    const descriptions = document.querySelectorAll('.description__content');

    descriptions.forEach(description => {
      const holder = description.querySelector('.description__holder');
      if (holder) {
        holder.addEventListener('click', () => toggleDescription(description));
      }
    });

    document.addEventListener('click', event => {
      if (isMobileResolution()) {
        closeAllDescriptions(event.target);
      }
    });

    const closeAllDescriptions = target => {
      descriptions.forEach(description => {
        if (description !== target.closest('.description__content')) {
          hideDescription(description);
        }
      });
    };

    const toggleDescription = description => {
      description.classList.toggle('active');
      updateHeight(description);
    };

    const hideDescription = description => {
      description.classList.remove('active');
      resetHeight(description);
    };

    const updateHeight = description => {
      const aside = description.querySelector('.description__aside');
      const textBlocks = aside.querySelectorAll('.description__text');

      const newHeight = Array.from(textBlocks).reduce(
        (acc, textBlock) => acc + textBlock.offsetHeight,
        0
      );

      const additionalHeight = 80;
      aside.style.height = description.classList.contains('active')
        ? `${newHeight + additionalHeight}px`
        : '0';
    };

    const resetHeight = description => {
      const aside = description.querySelector('.description__aside');
      aside.style.height = '0';
    };

    const calculateTotalHeight = elements => {
      return Array.from(elements).reduce(
        (acc, element) => acc + element.offsetHeight,
        0
      );
    };
  }
})();
