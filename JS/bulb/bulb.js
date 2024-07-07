var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "black";
    bulb.style.Color = "white";
    document.getElementById("butt").innerHTML = "OFF";

    flag = 1;
  } else {
    bulb.style.backgroundColor = "white";
    bulb.style.Color = "white";
    document.getElementById("butt").innerHTML = "ON";
    flag = 0;
  }
});
