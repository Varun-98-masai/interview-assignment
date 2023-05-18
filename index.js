const carousel = document.querySelector('.carousel');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function goToPrevious() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

function goToNext() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', goToPrevious);
nextBtn.addEventListener('click', goToNext);

// Show the initial slide
showSlide(currentIndex);


const popupBtn = document.getElementById('demo_btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

popupBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
