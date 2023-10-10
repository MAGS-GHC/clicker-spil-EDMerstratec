let clicks = 0; //alternatively, Currency

let currentScore = 0;//DEFAULT 0. Equals clicks earned, minus clicks spent
let highScore = 25; //DEFAULT 0

//let autoClickInterval = 1000; //interval for autoClick. 1000 = 1sec
let autoClickLevel = 0; //level of autoclick upgrade at start
let autoClickDiv = 1; //used as divisor for seconds on passive clicks DEFAULT 1.0. Maybe cut and use autoClickLevel square root?
let clickScoreMult = 1; //each level multiplies each click. DEFAULT 1

//DEFINE COSTS OF UPGRADES
let costAutoClickUp = 7; //cost value 7 for testing
let costClickUp = 5; //

//Below added to initialize score/level displays
updateShownValues();

//check score and update if higher than old high score
//let document.getElementById("highScore").innerHTML = highScore;

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
    if (clicks >= (costClickUp * clickScoreMult)) { //cost * currentlevel
        clicks -= (clickScoreMult*costClickUp);
        clickScoreMult++;
        updateShownValues();
    }
}

function upgradeAutoClick() {//called to upgrade autoclick
    if (clicks >= (costAutoClickUp * (autoClickLevel+1))) {//level 0 default, so +1
        autoClickLevel++
        clicks -= (costAutoClickUp*autoClickLevel)
        autoClickDiv = autoClickDiv + 0.2 //reduces interval in autoClicker
        updateShownValues();
       // window.setInterval(autoClicker(){})
    }
}
let intervalAutoClick = window.setInterval(function autoClicker() {
    if (autoClickLevel === 0) {}
    else {
    clicks += clickScoreMult; //functions like a regular click, including upgrades. Could define other value for autoclicks only. clicks++ simplest
    updateShownValues();
    }
}, (5000/(autoClickDiv*5)));
//clearInterval(intervalNameHere) stops function entirely



function updateShownValues() {
    document.getElementById('showCurrentScore').innerHTML = ("Current Score: " + currentScore);
    document.getElementById('showHighScore').innerHTML = ("High Score: " + highScore);
    document.getElementById('showCurrency').innerHTML = ("Score to spend: " + clicks);
    document.getElementById('showClickLevel').innerHTML = ("Clicks add " + clickScoreMult + " score");
    document.getElementById('showAutoClicks').innerHTML = ("Autoclicker level is: " + autoClickLevel);
}

function resetButton() {
    //clearInterval(intervalAutoClick); 
    clicks = 0;
    currentScore = 0;
    autoClickLevel = 0;
    autoClickDiv = 1;
    clickScoreMult = 1;
    updateShownValues();
}
//document.getElementById('showHighScore').innerHTML = highScore;
//Script must be called AFTER HTML defines ID

//TODO put score etc. updates into separate function