var container = document.querySelector(".container");
var cursor = document.querySelector(".cursor");

container.addEventListener("mousemove", function (details) {
    cursor.style.left = details.x + "px";
    cursor.style.top = details.y + "px";
    console.log(details);
})