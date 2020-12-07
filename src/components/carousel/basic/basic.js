//const transformed = window.getComputedStyle(currentSlide).getPropertyValue('transform').match(/(-?[0-9\.]+)/g) || [0, 0, 0, 0, 0, 0];
//const [scaleX, skewY, skewX, scaleY, translateX, translateY] = transformed;

/*
slides.forEach((slide, i) => {
    const { clientWidth: slideWidth, clientHeight: slideHeight } = slide;
    slide.style.position = 'absolute';

    containerWidth += slideWidth;
    slide.style.left = (containerWidth - slideWidth) + 'px';

    maxWidth = Math.max(maxWidth, slideWidth)
    maxHeight = Math.max(maxHeight, slideHeight)
})
container.style.height = maxHeight + 'px';
view.style.width = maxWidth + margin + 'px';
*/

const view = document.querySelector('.view');
const container = document.querySelector('.container');
const slide = document.querySelector('.slide');
const slides = document.querySelectorAll('.slide');
const images = document.querySelectorAll('img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// set slide position

const destination = Array(slides.length).fill(0);
let current = 0;

window.addEventListener('load', (e) => {
  let containerWidth = 0;
  let maxHeight = 0;
  let maxWidth = 0;
  const margin = 200;

  slides.forEach((slide, i) => {
    const { bottom, height, width, left, right, top, x, y } = slides[
      i
    ].getBoundingClientRect();

    destination[i + 1] = destination[i] + +width;
  });
});

// animation

const duration = '1s';
const timingFunction = 'cubic-bezier(.24,.39,.12,.89)';

const moveRight = function () {
  if (current === 0) {
    return;
  }
  current--;

  if (this.isAnimating) {
    return;
  }
  this.isAnimating = true;

  const animate = () => {
    if (next.isAnimating) {
      this.isAnimating = false;
    }
    const offsetToDestination = destination[current];

    container.style.transition = duration;
    container.style.transitionTimingFunction = timingFunction;
    container.style.transform = `translateX(${-offsetToDestination}px)`;
    container.ontransitionend = () => {
      this.isAnimating = false;
    };

    this.isAnimating && requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

const moveLeft = function () {
  if (current === destination.length - 2) {
    return;
  }

  current++;
  if (this.isAnimating) {
    return;
  }

  this.isAnimating = true;

  const animate = () => {
    if (prev.isAnimating) {
      this.isAnimating = false;
    }
    const offsetToDestination = destination[current];

    container.style.transition = duration;
    container.style.transitionTimingFunction = timingFunction;
    container.style.transform = `translateX(${-offsetToDestination}px)`;
    container.ontransitionend = () => {
      this.isAnimating = false;
    };
    this.isAnimating && requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
};

prev.addEventListener('click', moveRight);
next.addEventListener('click', moveLeft);
