let btn = document.createElement("button");
btn.innerHTML = "My Button";
btn.addEventListener("click", () => {
    window.open("https://example.com");
});
document.getElementById("divID").appendChild(btn);    
