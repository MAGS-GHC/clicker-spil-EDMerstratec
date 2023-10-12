

updateScoreValues()
document.body.style.backgroundImage = "url('icons/BGStart.png')";

function updateScoreValues() { //called many places to update score and cash values
    if (highScore < currentScore) { highScore = currentScore} //update high score, if current is higher
    document.getElementById('showCurrentScore').innerHTML = ("Current Score: " + currentScore);
    document.getElementById('showHighScore').innerHTML = ("High Score: " + highScore);
    document.getElementById('showCurrency').innerHTML = ("$: " + cash);
}

function updateBackground(round) {
    switch (round) {
        case 0:
            document.body.style.backgroundImage = "url('icons/BGWinter.png')";
            break;
        case 1:
            document.body.style.backgroundImage = "url('icons/BGSpring.png')";
            break;
        case 2:
            document.body.style.backgroundImage = "url('icons/BGSummer.png')";
            break;
        case 3:
            document.body.style.backgroundImage = "url('icons/BGAutumn.png')";
            break;
        default: 
        document.body.style.backgroundImage = "url('icons/BGStart.png')";
    }
}