
// global variables for game
var wins = 0;
var losses = 0;

// init function
function init() {
    startGame();
};

// function to (re)start game
function startGame() {
    // generates random number for computer
    computerNumber = randomNumberGenerator(120, 19);
    playerScore = 0;

    // displays default player score / random generated number on screen
    $("#computerNumber").text(computerNumber);
    $("#playerScore").text(playerScore);


    // adds value to jewel divs
    $("#blue-octagon").val(randomNumberGenerator(12, 1));
    console.log($("#blue-octagon").val());
    $("#green-diamond").val(randomNumberGenerator(12, 1));
    console.log($("#green-diamond").val());
    $("#red-oval").val(randomNumberGenerator(12, 1));
    console.log($("#red-oval").val());
    $("#blue-square").val(randomNumberGenerator(12, 1));
    console.log($("#blue-square").val());

    // on click functions to add crystal scores to HTML
    $("#blue-octagon").click(addScores);
    $("#green-diamond").click(addScores);
    $("#red-oval").click(addScores);
    $("#blue-square").click(addScores);
};




// function to add the random crystal scores to the player score
function addScores() {
    playerScore += parseInt($(this).val());
    $("#playerScore").text(playerScore);
    winLoss();
};

function winLoss() {
    // if / else statement to determine win/loss
    // add wins and losses
    // displays wins / losses on screen
    if (playerScore == computerNumber) {
        wins++;
        $("#wins").text(wins);
        // $("#win-lose").text("Great Job!!! You Win!!!");
        alert("Great Job!!! You Win!!!");
        resetGame();

    } else if (playerScore > computerNumber) {
        losses++;
        $("#losses").text(losses);
        // $("#win-lose").text("You Lost. Try Again!");
        alert("You Lost. Try Again!");
        resetGame();

    }
}

// reset game
function resetGame() {
    // generates a new random number for computer
    computerNumber = randomNumberGenerator(120, 19);
    // resests playerScore to 0
    playerScore = 0;

    // displays the numbers for the new game
    $("#computerNumber").text(computerNumber);
    $("#playerScore").text(playerScore);


    // adds regernated value to jewel divs for new game
    $("#blue-octagon").val(randomNumberGenerator(12, 1));
    console.log($("#blue-octagon").val());
    $("#green-diamond").val(randomNumberGenerator(12, 1));
    console.log($("#green-diamond").val());
    $("#red-oval").val(randomNumberGenerator(12, 1));
    console.log($("#red-oval").val());
    $("#blue-square").val(randomNumberGenerator(12, 1));
    console.log($("#blue-square").val());

}

// random number generator with max, min arguments
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


window.onload = init();
