//button to start the game, 
//to pause/resume, some functions shouldn't activate during
//button on season/round end with score and automatic pause




//Start with a click

function startRound() {
    switch (roundNumber) {
        case 0: //spring, game round 1 start
            cash = 2500;
            updateScoreValues();
            roundNumber = 1;
            birdInterval = window.setInterval(() => { //sets round1 birdInterval
                //function to call bird
            }, 10000);
            roundTimer = window.setTimeout(endRound, roundDuration); //note no () after endRound function. For some reason, endRound() runs the function immediately and only delays return value
            break;
        case 1: //summer, round 2 start
            roundNumber = 2;
            roundTimer = window.setTimeout(endRound, roundDuration);
            break;
        case 2:
            roundNumber = 3; //autumn, round 3 start
            roundTimer = window.setTimeout(endRound, roundDuration);
            break;
        default:
             console.log("Error roundNumber");
    }
}

function endRound() {
    console.log("Roundend log")
}



function endGame() { //reset values for another game
    roundNumber = 0;
    scarecrow = false;
}