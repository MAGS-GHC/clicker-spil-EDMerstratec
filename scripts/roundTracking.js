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
            updateBackground(roundNumber); //set background to Spring. Otherwise handled at end of rounds
            birdInterval = window.setInterval(() => { //sets round1 birdInterval
                //function to call bird
            }, 10000);
            roundTimer = window.setTimeout(endRound, roundDuration); //note no () after endRound function. For some reason, endRound() runs the function immediately and only delays return value
            break;
        case 1: //summer, round 2 start
            roundNumber = 2;
            roundTimer = window.setTimeout(endRound, roundDuration);
            birdInterval = window.setInterval(() => { //sets round1 birdInterval
                //function to call bird
            }, 10000);
            break;
        case 2:
            roundNumber = 3; //autumn, round 3 start
            roundTimer = window.setTimeout(endRound, roundDuration);
            birdInterval = window.setInterval(() => { //sets round1 birdInterval
                //function to call bird
            }, 10000);
            break;
        default:
             console.log("Error roundNumber");
    }
}

function endRound() {
    //console.log("Roundend log") //test trigger
 //   if (roundNumber === 3) { //Let's try to replace with a ternary
 //       endGame()
 //   }
 //   else {
 //       updateBackground((roundNumber+1));
 //   }
 
    clearInterval(birdInterval); //round over, no more birdies
    (roundNumber === 3) ? endGame() : updateBackground((roundNumber+1));
}



function endGame() { //reset values for another game
    roundNumber = 0;
    sunflowerHP.fill(100, 0, 8); //function to fill 100 into all spots in array from 0 to 7 
    updateBackground(roundNumber);
    scarecrow = false;
}