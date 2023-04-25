document.getElementById("myImage").addEventListener("click", function() {
  const img = document.getElementById("myImage");
  img.classList.add("flip");

  // Add animation to the image flip
  img.style.transition = "transform 0.5s";
  img.style.transform = "rotateY(180deg)";

  setTimeout(function() {
    const newSrc = (img.getAttribute("src") === "../images/mefancy.jpg") ? "../images/snowboard.PNG" : "../images/mefancy.jpg";
    img.setAttribute("src", newSrc);
    img.classList.remove("flip");

    // Add animation to rotate the image back to its original position
    img.style.transition = "transform 0.5s";
    img.style.transform = "rotateY(0deg)";
  }, 500);
});