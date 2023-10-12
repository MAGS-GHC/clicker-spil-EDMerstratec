let clicks = 0; //alternatively, Currency. Clicks earnt minus spent

let currentScore = 0;//DEFAULT 0. Equals all clicks earnt, doesn't count spent
let highScore = 25; //DEFAULT 0. Set 25 for testing

let autoClickLevel = 0; //level of autoclick upgrade at start
let autoClickDiv = 1; //used as divisor for seconds on passive clicks
let clickScoreMult = 1; //each level multiplies each click. DEFAULT 1

//DEFINE COSTS OF UPGRADES
let costAutoClickUp = 7; //cost values lower for testing
let costClickUp = 5; //

let intervalAutoClick = window.setInterval(autoClicker, (10000));//calls autoClicker function below every 10000ms (10sec)
//clearInterval(intervalNameHere) stops function entirely. Must clear + restart interval when interval timer (10000) is altered, or it won't update. Done in upgradeAutoClick function


//Below added to initialize score/level displays
updateShownValues();


////////////////////////Initialization done, functions start

function clickCount() { //add clicks*clickLevel to counter when button is pressed
    clicks += clickScoreMult; // = (clicks++ * clickScoreMult), didn't work);
    currentScore += clickScoreMult;
    if (currentScore > highScore) { highScore = currentScore};
    //console.log(clicks) //for testing
    //console.log(currentScore)
    //console.log(highScore)
    updateShownValues();
}



function upgradeClickLevel() { //called to upgrade score per click
    if (clicks >= (costClickUp * clickScoreMult)) { // check if cost * currentlevel met
        clicks -= (clickScoreMult*costClickUp); //subtract cost
        clickScoreMult++;
        updateShownValues();
    }
}



function upgradeAutoClick() {//called to upgrade autoclick
    if (clicks >= (costAutoClickUp * (autoClickLevel+1))) {//level 0 default, so +1
        autoClickLevel++
        clicks -= (costAutoClickUp*autoClickLevel)
        autoClickDiv = (autoClickDiv + 1) //reduces interval in autoClicker. Could be autoClickDiv++ or +=, but leaving as is while playing with values
        updateShownValues();
       // window.setInterval(autoClicker(){})
       clearInterval(intervalAutoClick);
       intervalAutoClick = window.setInterval(autoClicker, (10000/autoClickDiv));
    }
}



function autoClicker() { //called by intervalAutoClick
    if (autoClickLevel === 0) {}
    else {
    clicks += clickScoreMult; //functions like a regular click, including upgrades. Could define other value for autoclicks only. clicks++ simplest
    updateShownValues();
    }
}



function updateShownValues() {
    document.getElementById('showCurrentScore').innerHTML = ("Current Score: " + currentScore);
    document.getElementById('showHighScore').innerHTML = ("High Score: " + highScore);
    document.getElementById('showCurrency').innerHTML = ("Score to spend: " + clicks);
    document.getElementById('showClickLevel').innerHTML = ("Clicks add " + clickScoreMult + " score - Upgrade Cost: " + (costClickUp * clickScoreMult));
    document.getElementById('showAutoClicks').innerHTML = ("Autoclicker level is: " + autoClickLevel + " - Upgrade Cost: " + (costAutoClickUp * (autoClickLevel+1)));
}



function resetButton() {
    //clearInterval(intervalAutoClick); not strictly needed because of if block in functions, but what is the performance impact of an interval?
    clicks = 0;
    currentScore = 0;
    autoClickLevel = 0;
    autoClickDiv = 1;
    clickScoreMult = 1;
    updateShownValues();
}



//document.getElementById('showHighScore').innerHTML = highScore;
//Script must be called AFTER HTML defines ID