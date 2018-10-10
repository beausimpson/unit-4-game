
// global variables for game
// var computerNumber;

var wins = 0;
var losses = 0;

// var jewelIdArray = ["blue-octagon", "#greem-diamond", "red-oval", "blue-sqaure"];

// init function
function init() {
    startGame();
};

// function to (re)start game
function startGame() {

    var playerScore = 0;
    computerNumber = randomNumberGenerator(120, 19)
    console.log(computerNumber);

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

    // on click functions
    // add the random crystal scores to the player score
    $("#blue-octagon").click(function () {
        console.log($("#blue-octagon").val())
        playerScore += parseInt($(this).val());
        $("#playerScore").text(playerScore);
    });
    $("#green-diamond").click(function () {
        console.log($("#green-diamond").val())
        playerScore += parseInt($(this).val());
        $("#playerScore").text(playerScore);
    });
    $("#red-oval").click(function () {
        console.log($("#red-oval").val())
        playerScore += parseInt($(this).val());
        $("#playerScore").text(playerScore);
    });
    $("#blue-square").click(function () {
        console.log($("#blue-square").val())
        playerScore += parseInt($(this).val());
        $("#playerScore").text(playerScore);
    });

    // if / else statement to determine win/loss
    // add wins and losses to screen
    if (playerScore === computerNumber) {
        alert("Great Job!!!\nYou Win!!!")
        wins++;
    } else if (playerScore > computerNumber) {
        alert("You Lose!\nTry Again!")
        losses++;
    }
}



window.onload = init();

// helper functions
// random number generator with max, min arguments
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


// reset game




// function jewelValueGenerator() {
//     $(jewelIdArray).each(function () {
//         $(this).val(randomNumberGenerator(12, 1));
//     })
// }