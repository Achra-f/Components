/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import './carousel.css';

export default function initializeCarousel(container) {
  let slideIndex = 0;
  const slides = container.getElementsByClassName('carousel-slides')[0].getElementsByTagName('img');
  const dots = container.getElementsByClassName('dot');

  const showSlide = (n) => {
    slideIndex = n;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].className += ' active';
  };

  const nextSlide = () => {
    showSlide(slideIndex + 1);
  };

  const prevSlide = () => {
    showSlide(slideIndex - 1);
  };

  const setSlideOnClick = () => {
    for (let i = 0; i < dots.length; i++) {
      dots[i].onclick = () => {
        showSlide(i);
      };
    }
  };

  container.getElementsByClassName('prev-button')[0].onclick = prevSlide;
  container.getElementsByClassName('next-button')[0].onclick = nextSlide;

  showSlide(slideIndex);
  setSlideOnClick();

  // eslint-disable-next-line no-unused-vars
  const slideshowInterval = setInterval(nextSlide, 5000);
}
