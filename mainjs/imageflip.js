document.getElementById("myImage").addEventListener("click", function() {
  const img = document.getElementById("myImage");
  img.classList.add("flip");
  setTimeout(function() {
    const newSrc = (img.getAttribute("src") === "../images/mefancy.jpg") ? "../images/snowboard.PNG" : "../images/mefancy.jpg";
    img.setAttribute("src", newSrc);
    img.classList.remove("flip");
  }, 500);
});



