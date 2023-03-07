const menuItems = document.querySelectorAll('.menu-content a.menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    window.location = this.getAttribute('href');
  });
});
