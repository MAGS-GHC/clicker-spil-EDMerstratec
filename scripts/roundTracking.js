//button to start the game, 
//to pause/resume, some functions shouldn't activate during
//button on season/round end with score and automatic pause




//Start with a click
function startRound1() { //Spring, easy
    cash = 2500; //start with 2500 schmuckers
    roundNumber = 1; //start round 1
    roundDuration = 90; //round 1 to last 90 seconds, DEBUG
    birdInterval = window.setInterval(() => { //sets round1 birdInterval
        console.log("Cacaw")
    }, 10000);
}

function startRound2() { //Summer, faster birds
    roundNumber = 2; //round 2 set
    roundDuration = 15; //round 2 to last 15 seconds, DEBUG

}

function startRound3() { //Autumn, fastest?
    roundNumber = 3; //round 3 set
    roundDuration = 15; //round 3 to last 15 seconds, DEBUG
}

function endRound() {
    
}

function endGame() {
    roundNumber = 0
}