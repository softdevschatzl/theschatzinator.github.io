// Get the element you want to toggle the class on
const element = document.querySelector('.slide-in');

// Toggle the active class on the element when the page loads
window.addEventListener('load', function() {
  element.classList.toggle('active');
});

