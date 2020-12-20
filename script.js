/*var container = document.querySelector(".container");

var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector(".rgb-color");
var message = document.querySelector("#message");
var headContainer = document.querySelector(".head-container")



var rgbColors = [
  "rgb(128, 128, 0)",
  "rgb(255, 255, 0)",
  "rgb(154, 205, 50)",
  "rgb(85,107, 47)",
  "rgb(255, 205, 47)",
  "rgb(255, 205, 255)"
]
var pickedColor = rgbColors[0]
rgbDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){

squares[i].style.background = rgbColors[i]    
}

for(var i = 0; i < squares.length; i++){
   
var color = squares[i].style.background; 


squares[i].addEventListener("click",() => {
    if(color === pickedColor){
      message.textContent = "Correct"
      clickedBox(pickedColor)
      headContainer.style.backgroundColor = pickedColor;
    }else{
      squares.forEach(el => {
      var  colorbox = el.style.background; 
        el.addEventListener("click", () =>{
      if(colorbox === pickedColor){
        message.textContent = "Correct"
        clickedBox(pickedColor);
        headContainer.style.backgroundColor = pickedColor;
      }else{
        message.textContent = "Try Again!"
        el.style.background = "#232323"
       }
        })
      })     
    }
})
      
  }

 function clickedBox(color){
   for(var i = 0; i< squares.length; i++){
     squares[i].style.backgroundColor = color
   }
 }
*/



var numsquares = 6
var colors = newGenerateColor(numsquares)

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".rgb-color");
var messageDisplay = document.querySelector("#message");
var headContainer  = document.querySelector(".head-container")
var resetButton = document.querySelector("#reset-button")
var easy =document.querySelector("#easy");
var hard = document.querySelector("#hard");

var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;



easy.addEventListener("click", (e) => {
  e.preventDefault();
 hard.setAttribute("class","")
 easy.setAttribute("class","active")
 headContainer.style.backgroundColor = "rgb(5, 76, 135)";
 messageDisplay.textContent = "";
 numsquares = 3;
 colors = newGenerateColor(numsquares)
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 for(var i = 0; i < squares.length; i++){
  
  if(colors[i]){
    squares[i].style.background = colors[i];
  }else{
    squares[i].style.display = "none";
  } 
 }

});

hard.addEventListener("click", (e) => {
  e.preventDefault();
  
  hard.setAttribute("class","active")
  easy.setAttribute("class","")
  headContainer.style.backgroundColor = "rgb(5, 76, 135)";
  messageDisplay.textContent = "";
  numsquares = 6;
  colors = newGenerateColor(numsquares)
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
   
   if(colors[i]){
     squares[i].style.background = colors[i];
     squares[i].style.display = "block";
   } 
  }
 
})

resetButton.addEventListener("click", () =>{
  colors = newGenerateColor(numsquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Color"
  messageDisplay.textContent = "";
  for(var i =0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
})

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      resetButton.textContent = "Play Again";
      headContainer.style.backgroundColor = pickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}



function newGenerateColor(num){
 var arr = [];

  for(var i = 0; i < num; i++){
     arr.push(generateRgbColor())
  }

  return arr;
}

function generateRgbColor(){
 var red = Math.floor(Math.random() * 256 )
 var green = Math.floor(Math.random() * 256 )
 var blue = Math.floor(Math.random() * 256 )

 return `rgb(${red}, ${green}, ${blue})`

}

