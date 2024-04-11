const english = {
    'about-us': 'About us'
  };

  const albanian = {
    'about-us': 'Rreth nesh'
  };

  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    const translateValue = element.getAttribute('data-translate');
    let localStor = localStorage.getItem('lang');
    let translation;

    if (localStor === 'albanian') {
      translation = albanian[translateValue];
    } else {
      translation = english[translateValue];
    }

    if (translation) {
      element.innerHTML = translation;
    } else {
      console.log(`Translation not found for "${translateValue}"`);
    }
  });

  const setLangs = (event) => {
    const langValue = event.target.getAttribute('data-lang');
    localStorage.setItem('lang', langValue);

    elements.forEach((element) => {
      const translateValue = element.getAttribute('data-translate');
      let localStor = localStorage.getItem('lang');
      let translation;

      if (localStor === 'albanian') {
        translation = albanian[translateValue];
      } else {
        translation = english[translateValue];
      }

      if (translation) {
        element.innerHTML = translation;
      } else {
        console.log(`Translation not found for "${translateValue}"`);
      }
    });
  };

  document.addEventListener('click', setLangs);