// DOM MANIPULATIONN

var a = document.querySelector("#demo").innerHTML = "button me nai mere pe dabao";

var a = document.querySelector("h1") //.style.color = "blue"
// a.style.backgroundColor = "black"
// a.style.textDecoration = "line-through"
// a.style.color = "blue"   
a.addEventListener("click", function () {
     let a = parseInt(prompt("Enter first number"));
     let b = parseInt(prompt("Enter second number"));
     let result = a * b;
     document.getElementById('demo').innerHTML = result;
})