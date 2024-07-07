var rect = document.querySelector(".center");

rect.addEventListener("mousemove", function (mouseDetails) {  // mouseDetails provide mouse location on your screen is details proive "[mousemove]" itself.
    var boxLocation = rect.getBoundingClientRect();
    var boxKeAnder = mouseDetails.clientX - boxLocation.left
    if (boxKeAnder < boxLocation.width / 2) {
        console.log("me left me hu");
        rect.style.backgroundColor = "yellow";
    }
    else {
        console.log("me right me hu");
        rect.style.backgroundColor = "blue";
    }
    console.log(boxKeAnder)
})