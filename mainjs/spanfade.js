const fadeSpan = document.querySelector('#h1span');

let isVisible = true;

setInterval(() => {
  if (isVisible) {
    fadeSpan.style.opacity = 0;
    isVisible = false;
  } else {
    fadeSpan.style.opacity = 1;
    isVisible = true;
  }
}, 3000);
