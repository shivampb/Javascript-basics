var card = document.querySelector(".container");
var love = document.querySelector("i");


card.addEventListener("dblclick", function () {
    love.style.transform = 'translate(-50%,-50%) scale(2.5)';
    love.style.opacity = 0.8;

    setTimeout(() => {
        love.style.opacity = 0;
    }, 1000);
    setTimeout(function () {
        love.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 3000);
})  