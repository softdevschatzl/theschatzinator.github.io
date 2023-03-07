// Select all elements with the class to be animated
var elements = document.querySelectorAll('.btn-open');

// Set initial position of the elements to be off-screen to the right
for (var i = 0; i < elements.length; i++) {
  elements[i].style.right = '-100%';
  elements[i].style.position = 'relative';
}

// Animate the elements into view on the center of the page
windows.onload = function animateElements() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.left = '50%';
    elements[i].style.transform = 'translateX(-50%)';
  }
}
