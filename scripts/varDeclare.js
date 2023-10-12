//All global variables here

let roundNumber = 0; //starting at round 0, round 1 to 3 on start. Spring/Summer/Autumn
let roundTimer = window.setTimeout(0, 3000); //Note that function  executes immediately, but only returns value at 3000. For this purpose, write function instead of function(). Why does this work? Read up on
let roundDuration = 3000 //defines round duration; default 90000 = 90 seconds

let cash = 0; //Money, money, money
let highScore = 0; //Highest end-game score
let currentScore = 0; //current score. Sunflowers collected

let scarecrow = false; //Upgrade in birds.js 
let birdInterval = window.setInterval(() => { //sets initial bird interval blank for pre-game
}, 100000);
let birdCheck = 0.0; //used to store random value for bird appearance




//Sunflowers... let's try this
//8 sunflowers in total, track health by 
const sunflowerHP = [0,0,0,0,0,0,0,0]; //8 sunflower health values to track. EDIT LATER: failed to initialize at set length with no manual values, try to get working
sunflowerHP.fill(100, 0, 8); //function to fill 100 into all spots in array from 0 to 7 (ends "before index 8" at 7)
