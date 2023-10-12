//All global variables here

let roundNumber = "Round 0"; //starting at round 0, round 1 to 3 on start. Spring/Summer/Autumn
let roundDuration = 90; //measured in seconds. Check ctrl+f DEBUG

let cash = 0; //Money, money, money
let highScore = 0; //Highest end-game score
let currentScore = 0; //current score. Sunflowers collected

let scarecrow = false; //Upgrade in birds.js 
let birdInterval = window.setInterval(() => { //sets initial bird interval blank for pre-game
    console.log("Cacaw");
}, 1000);
