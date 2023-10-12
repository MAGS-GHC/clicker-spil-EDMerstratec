

updateScoreValues()

function updateScoreValues() { //called many places to update score and cash values
    if (highScore < currentScore) { highScore = currentScore} //update high score, if current is higher
    document.getElementById('showCurrentScore').innerHTML = ("Current Score: " + currentScore);
    document.getElementById('showHighScore').innerHTML = ("High Score: " + highScore);
    document.getElementById('showCurrency').innerHTML = ("$: " + cash);
}
