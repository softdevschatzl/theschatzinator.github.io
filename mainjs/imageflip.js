document.getElementById("myImage").addEventListener("click", function() {
  const img = document.getElementById("myImage");
  img.classList.add("flip");
  setTimeout(function() {
    const newSrc = (img.getAttribute("src") === "../images/john.jpg") ? "../images/obamna.png" : "../images/john.jpg";
    img.setAttribute("src", newSrc);
    img.classList.remove("flip");
  }, 500);
});



