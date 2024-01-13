var css = document.getElementsByTagName("h3")[0];
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

//to make code DRY
//stored background value to var hexValue to display hex values instead of rgb
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  var hexValue =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = hexValue + ";";
}

function startingGradient() {
  color1.value = "#ff0000";
  color2.value = "#ffff00";
  setGradient();
}

function generateRandomColor() {
  var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  color1.value = "#" + randomColor1;
  color2.value = "#" + randomColor2;
  setGradient();
}

startingGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", generateRandomColor);
