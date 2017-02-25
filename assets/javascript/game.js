var wins=0;
var losses=0;

var chosenNumber=0;
var firstCrystal=0;
var secondCrystal=0;
var thirdCrystal=0;
var fourthCrystal=0;
var score = 0;

var buttonClick = new Audio("assets/audio/button.wav")

function startGame(){
	chosenNumber = Math.floor(Math.random()*120+19);
	firstCrystal = Math.floor(Math.random()*12+1);
	secondCrystal = Math.floor(Math.random()*12+1);
	thirdCrystal = Math.floor(Math.random()*12+1);
	fourthCrystal = Math.floor(Math.random()*12+1);
	score = 0;
	$('#totalScore').text(score);

	$('#chosenNumber').text(chosenNumber);
}


// CLICK IMAGES TO ADD ITS VALUE TO SCORE
$('#crystal1').on("click", function(){
	score += firstCrystal;
	$('#totalScore').text(score);
	buttonClick.play();
	endGame();
});
$('#crystal2').on("click", function(){
	score += secondCrystal;
	$('#totalScore').text(score);
	buttonClick.play();
	endGame();
});
$('#crystal3').on("click", function(){
	score += thirdCrystal;
	$('#totalScore').text(score);
	buttonClick.play();
	endGame();
});
$('#crystal4').on("click", function(){
	score += fourthCrystal;
	$('#totalScore').text(score);
	buttonClick.play();
	endGame();
});


function endGame(){
	if (score===chosenNumber) {
		alert("You Win!");
		wins++;
		$('#wins').text(wins);
		$('#totalScore').empty();
		startGame();
	}
	if (score > chosenNumber){
		alert("You Lose!");
		losses++;
		$('#losses').text(losses);
		$('#totalScore').empty();
		startGame();
	}
}











startGame();