console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

var userchoice = prompt("First Pick: pick cards 1, 2, 3, or 4")
var firstPick

if (userchoice == 1) {
	var firstPick = cardOne;
	console.log(firstPick);
}

else if (userchoice == 2) {
	var firstPick = cardTwo;
	console.log(firstPick);
}

else if (userchoice == 3) {
	var firstPick = cardThree;
	console.log(firstPick);
}

else if (userchoice == 4) {
	var firstPick = cardFour;
	console.log(firstPick);
}

else {
	alert("Invalid card choice, please choose 1, 2, 3, or 4");
};


var userchoiceTwo = prompt("Pick the second Card! Value must be 1, 2, 3, or 4. Keep in mind you can't choose the card from before")
var secondPick


if (userchoiceTwo == 1) {
	var secondPick = cardOne;
	console.log(secondPick);
}

else if (userchoiceTwo == 2) {
	var secondPick = cardTwo;
	console.log(secondPick);
}

else if (userchoiceTwo == 3) {
	var secondPick = cardThree;
	console.log(secondPick);
}

else if (userchoiceTwo == 4) {
	var firstPick = cardFour;
	console.log(secondPick);
}

else {
	alert("Invalid card choice, please choose 1, 2, 3, or 4");
};

if (firstPick == secondPick) {
	alert ("Congrats! You found a match!");
}
else {
	alert ("Sorry, try again.");
}
	



