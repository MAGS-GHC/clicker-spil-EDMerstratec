//Plan: timer for bird intervals, three stages
//during all stages, clicking on bird scares it off. Stage 3, bird eats plants

//Scarecrow upgrade halves bird timer?


//one interval with random chance of bird movement here. Alternatively 4 intervals
//updateShownValues()

function birdUpdate() {
    //insert birds changing
    birdCheck = Math.random(); //randomized bird check effect
    scarecrow ? (birdCheck /= 2) : console.log("A scarecrow sure would help...") ; //if scarecrow, halve random check
    switch (roundNumber) {
        case 1:
            break;
        case 2: 
            birdCheck *=1.5
            break;
        case 3:
            birdCheck *=2
            break;
        default: //do nothing if round 1
            console.log("Error in birdUpdate")
    }

    if (birdCheck < 0.2) {
        //no birds
    }
    else if (birdCheck < 0.4) {
        //2 birds advance
    }
    else if (birdCheck < 0.8) {
        //4 birds advance
    }
    else if (birdCheck < 1.2) {
        //8 birds advance
    }
}