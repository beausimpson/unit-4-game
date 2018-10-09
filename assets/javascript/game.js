
// global variables for game
// var computerNumber = 0;
var playerScore = 0;
var wins = 0;
var losses = 0;



// init function
function init() {
    startGame();
};

// function to (re)start game
function startGame () {
    // var radnomNumberGenerator = (Math.floor(Math.random()*(120-19+1)+19));
    $("#computerNumber").text(randomNumberGenerator(120,19));
    $("#playerScore").text(playerScore);
    $(".crystal-small").val(randomNumberGenerator(12,1));

}

$(".crystal-small").click(function() {
    console.log($(".crystal-small").val())
});

window.onload = init();



function randomNumberGenerator(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};