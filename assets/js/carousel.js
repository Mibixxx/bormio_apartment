const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
let slideInterval;

function showSlide(i) {
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

function startAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => showSlide(index + 1), 7000);
}

// Bottoni
prev.addEventListener('click', () => {
  showSlide(index - 1);
  startAutoSlide(); // resetta il timer
});

next.addEventListener('click', () => {
  showSlide(index + 1);
  startAutoSlide(); // resetta il timer
});

// Swipe su mobile
let startX = 0;
slides.addEventListener('touchstart', e => startX = e.touches[0].clientX);
slides.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) {
    showSlide(index - 1); 
    startAutoSlide();
  }
  else if (startX - endX > 50) {
    showSlide(index + 1);
    startAutoSlide();
  }
});

// Avvia il carosello automatico
startAutoSlide();
