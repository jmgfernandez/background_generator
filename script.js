var css = document.getElementsByTagName("h3")[0];
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

//to make code DRY
function setGradient() {
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent = body.style.background+";";
}

function startingGradient() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent = body.style.background+";";
}

function generateRandomColor() {
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	color1.value = "#"+randomColor1;
	color2.value = "#"+randomColor2;
  	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent = body.style.background+";";
}

startingGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", generateRandomColor);

