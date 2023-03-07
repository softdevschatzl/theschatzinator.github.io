document.querySelector('.menu-content').addEventListener('click', function(event) {
    if (event.target.classList.contains('menu-item')) {
      window.location = event.target.getAttribute('href');
    }
  });
  