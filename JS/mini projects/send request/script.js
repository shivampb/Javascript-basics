var istatus = document.querySelector("h5");
var add = document.querySelector(".add");
var flag = 0;

add.addEventListener("click", function () {
    if (flag == 0) {

        istatus.innerHTML = "req sended";
        add.innerHTML = "cancel";
        flag = 1;
    } else {

        istatus.innerHTML = "cancled";
        add.innerHTML = "add friend";
        flag = 0;
    }
})

var next = document.querySelector(".next");
var image = document.querySelector("img");
var namee = document.querySelector("h1");
var n = 0;
next.addEventListener("click", function () {
    if (n == 0) {

        image.src = 'https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';
        namee.innerHTML = "rick alpaz";
        n = 1;
    } else {
        image.src = 'https://images.unsplash.com/photo-1495698960877-fdafa268c67a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
        namee.innerHTML = "sivm bharz";
        n = 0;
    }
})