(() => {
  const mobileResolution = 799;
  const isMobileResolution = () => window.innerWidth <= mobileResolution;

  let descriptions;

  if (isMobileResolution()) {
    descriptions = document.querySelectorAll('.description__content');

    descriptions.forEach(description => {
      const holder = description.querySelector('.description__holder');
      if (holder) {
        holder.addEventListener('click', () => toggleDescription(description));
      }
    });
  }

  document.addEventListener('click', event => {
    if (isMobileResolution()) {
      closeAllDescriptions(event.target);
    }
  });

  const closeAllDescriptions = target => {
    descriptions.forEach(desc => {
      if (desc !== target.closest('.description__content')) {
        hideDescription(desc);
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

    const newHeight = calculateTotalHeight(textBlocks);
    const additionalHeight = 80;
    aside.style.height = description.classList.contains('active')
      ? `${newHeight + additionalHeight}px`
      : '0';
  };

  const calculateTotalHeight = elements => {
    return Array.from(elements).reduce((acc, element) => {
      const computedStyles = window.getComputedStyle(element);
      const elementHeight =
        element.offsetHeight +
        parseInt(computedStyles.marginTop) +
        parseInt(computedStyles.marginBottom);
      return acc + elementHeight;
    }, 0);
  };

  const resetHeight = description => {
    const aside = description.querySelector('.description__aside');
    aside.style.height = '0';
  };
})();
