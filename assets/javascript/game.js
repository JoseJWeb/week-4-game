/*GLOBAL VARIABLES SECTION 
WE HAVE 3 VARIABLES or CATEGORIES OF THINGS WE ARE TRACKING:
1. The Value of the Crystals each round
2. The Current and Target Score 
3. The Wins and Loss Count 
-----------------------------------------------------------*/

/*Crystal Variables 
The below could have been one starting point of creating the crystal
variables, beginning at zero then later on changing the value of the variable
var blueCrystal = 0;
var redCrystal = 0;
var greenCrystal = 0;
var yellowCrystal = 0;
*/

//Crystal Variables Object/Sub-Object Approach (Recommended)

var crystal = {
	blue:
	{
		name: "Blue",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	yellow: 
	{
		name: "Yellow",
		value: 0
	}
};

//Track Scores, Current and Target
var currentScore = 0;
var targetScore  = 0;

// Wins and Losses 
var winCount  = 0;
var lossCount = 0;

//Scores (Current and Target)
var currentScore = 0;
var targetScore  = 0;

//Wins and Losses 
var winCount  = 0;
var lossCount = 0;

//FUNCTIONS
//-----------------------------------------------------------
var getRandom = function(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;

}

//Starts Game and Restarts the Game 
function startGame() {
	//reset the Current Score 
	var currentScore = 0;

	//Set a New Target Score (between 19 and 120)
	targetScore = getRandom(19,120);

	//Set different values for each of the crystals (between 1 and 12)
	crystal.blue.value    = getRandom(1,12);
	crystal.green.value   = getRandom(1,12);
	crystal.red.value     = getRandom(1,12);
	crystal.yellow.value  = getRandom(1,12);

	
	//Change the HTML to reflect all of these changes
	$("#yourscore").html(currentScore);
	$("#targetScore").html(targetScore);

	//Testing Console
	console.log("- - - - - - - - - - - -");
	console.log("Target Score: " + targetScore);
	console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
	console.log("- - - - - - - - - - - -");
}

// Respond to clicks on the crystals
var addValues = function(crystal){
	//Change currentScore 
	currentScore = currentScore + crystal.value;

	//Chnage the html to reflect changes in cuurentScore
	$("#yourScore").html(currentScore);

	//Call the checkWin Function
	checkWin();

	//Testing Console
	console.log("Your Score: " + currentScore);
}

//Check if User Won or Lost and Reset the Game
var checkWin = function() {

	//Check if currentScore is larger than targetScore
	if(currentScore > targetScore) {
		alert("Sorry,You lost!");
		console.log("You lost!")
	}
}







//MAIN PROCESS (WHERE FUNCTIONS ARE GOING TO BE CALLED)
//-----------------------------------------------------------
/* First Step here, is create some click events associated with the Crystals in the HTML 
document, then, let's create a specific id that we can latch on to with JavaScript or jQuery.*/

//Using a Click on Function with jQuery below
$("#blue").click(function() {
	
	addValues(crystal.blue);
});

$("#green").click(function() {
	addValues(crystal.green);

});

$("#red").click(function() {
	addValues(crystal.red);
});

$("#yellow").click(function() {
	addValues(crystal.yellow);

});









