
var letterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var wins = 0;
var losses = 0;
var lettersGuessed = "";
var counter = 8;

var randomLetter = letterArray [Math.floor(Math.random()*letterArray.length)];
// console.log(randomLetter);

document.onkeyup = function() {
	var userGuess = event.key.toLowerCase();
	console.log(userGuess);
	console.log(randomLetter);


	if (userGuess===randomLetter){
		wins++;
		counter=8;
		lettersGuessed="";
		alert("You guessed the correct letter! "+randomLetter);
		console.log("wins: "+wins);
		console.log("counter: "+counter);
	
	} else {
		counter--;
		lettersGuessed = lettersGuessed + userGuess;
		alert("Try again...");
		console.log("counter: "+counter);
		console.log("letters: "+lettersGuessed);
	};

	if(counter===0){
		alert("You ran out of guesses.  ULTIMATE LOSER")
		losses++;
		counter=8;
		lettersGuessed="";
	};

	document.getElementById('wins').innerHTML=wins;
	document.getElementById('losses').innerHTML=losses;
	document.getElementById('guesses').innerHTML=counter;
	document.getElementById('lettersGuessed').innerHTML=lettersGuessed;
};