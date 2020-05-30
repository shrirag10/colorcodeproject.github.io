// JS FILE TO CONTROL THE BEHAVIOUR OF THE HTML+CSS
var numsquares=6;
var colors=generaterandom(numsquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var msg=document.querySelector("#msg");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#resetted");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");


// Loop through the squares in order to change color
for(var i=0;i< squares.length; i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function()
	{	 var clickedColor=this.style.backgroundColor;
		 if(clickedColor===pickedColor)
		 {
		 	msg.textContent="Correct";
		 	resetButton.textContent="Play Again?"
		 	changeColors(clickedColor);
		 	h1.style.backgroundColor=clickedColor;
		 }
		 else
		 {
		 	this.style.backgroundColor="#232323";
		 	msg.textContent="Try Again";

		 }
	});
}

// This statement displays the correct color's rgb in heading 
colorDisplay.textContent=pickedColor;

// Event listeners 

resetButton.addEventListener("click", function() 
{
	colors = generaterandom(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent="New Colors";
	msg.textContent="";
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

easybtn.addEventListener("click",function()
{ 	
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares=3;
	colors=generaterandom(numsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) 
	{
		if (colors[i])
		{
		 	squares[i].style.backgroundColor=colors[i];

		}
		else 
			{ squares[i].style.display="none";

		}
	}

});
 
hardbtn.addEventListener("click",function()
{ 
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsquares=6;
	colors=generaterandom(numsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) 
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";

	}


});
 
// Functions declaration and definition 
   

//Function to change color once the selected color is correct
function changeColors(color)
{
	for( var i=0;i< squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

// Function to generate a random color 
function pickColor()
{
var random=	Math.floor(Math.random()*colors.length);
return colors[random];
}

// Function to return a random generated arr with 3 items
function generaterandom(num)
{ 
	var arr=[]
	for (var i = 0; i < num; i++) 
		{ arr.push(randomColors())
 
		}
	return arr;
}


// Function to generate random numbers between 1 to 255
function randomColors()
{ 
	 var r=Math.floor(Math.random()*256);

	 var g=Math.floor(Math.random()*256);

	 var b=Math.floor(Math.random()*256);
	  return "rgb("+ r +", "+ g +", "+ b +")";
}

// End of Js script file complete