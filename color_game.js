var size = 6;
var colors = generateRandomColors(size);

var squares = document.querySelectorAll(".square");
var colorPicked = colors[pickColor()];
var colorDisplay = document.getElementById("color_display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	size = 3
	colors = generateRandomColors(size);
	colorPicked = colors[pickColor()];
	colorDisplay.textContent = colorPicked;
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})

hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	size = 6;
	colors = generateRandomColors(size);
	colorPicked = colors[pickColor()];
	colorDisplay.textContent = colorPicked;
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})


resetButton.addEventListener("click", function(){
	colors = generateRandomColors(size);
	colorPicked = colors[pickColor()];
	colorDisplay.textContent = colorPicked;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLOR";
	messageDisplay.textContent = "";
})


colorDisplay.textContent = colorPicked;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor != colorPicked){
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
		else{
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again";
		}
	})
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color; 
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return random;
}


function generateRandomColors(num){
	var list = [];

	for(var i = 0; i < num; i++){
		list.push(randomColor());
	}

	return list;
}


function randomColor(){
	var R = Math.floor(Math.random() * 256);
	var G = Math.floor(Math.random() * 256);
	var B = Math.floor(Math.random() * 256);
	return "rgb(" + R +", " + G + ", " + B + ")";
}