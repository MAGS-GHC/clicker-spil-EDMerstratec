//All global variables here

let roundNumber = 0; //starting at round 0, round 1 to 3 on start. Spring/Summer/Autumn
let roundTimer = window.setTimeout(0, 3000); //Note that function  executes immediately, but only returns value at 3000. For this purpose, write function instead of function(). Why does this work? Read up on
let roundDuration = 3000 //defines round duration; default 90000 = 90 seconds

let cash = 0; //Money, money, money
let highScore = 0; //Highest end-game score
let currentScore = 0; //current score. Sunflowers collected

let scarecrow = false; //Upgrade in birds.js 
let birdInterval = window.setInterval(() => { //sets initial bird interval blank for pre-game
    console.log("Cacaw");
}, 100000);
