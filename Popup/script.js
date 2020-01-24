const btn = document.querySelector('.button'),
      overlay = document.querySelector('.overlay'),
      closeOverlay = document.querySelector('.overlay__popup__close'),
      popUpActive = document.querySelector('.overlay__popup'),
      html = document.documentElement

btn.addEventListener('click', () => {
  overlay.classList.add('overlay__active');
  popUpActive.classList.add('overlay__popup__active');
  document.body.style.overflow = 'hidden';
  html.style.marginRight = '17px';
});

closeOverlay.addEventListener('click', () => {
  overlay.classList.remove('overlay__active');
  popUpActive.classList.remove('overlay__popup__active');
  document.body.style.overflow = 'scroll';
  html.style.marginRight = '0px';
});

window.addEventListener('click', event => {
  if(event.target == overlay) {
    overlay.classList.remove('overlay__active');
    popUpActive.classList.remove('overlay__popup__active');
    document.body.style.overflow = 'scroll';
    html.style.marginRight = '0px';
  }
});


