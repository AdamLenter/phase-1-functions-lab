// Code your solution in this file!
function distanceFromHqInBlocks(startingBlock) {
    return Math.abs(startingBlock - 42);
}

function distanceFromHqInFeet(startingBlock) {
    return (Math.abs(startingBlock - 42) * 264);
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    return(Math.abs(startingBlock - endingBlock) * 264);
}

function calculatesFarePrice(startingBlock, endingBlock) {
    var distanceInFeet = Math.abs(startingBlock - endingBlock) * 264;

    if(distanceInFeet <= 400) {
        return 0;
        }
    else if(distanceInFeet < 2000) {
        return (0.02 * (distanceInFeet - 400))
    
        }
    else if(distanceInFeet < 2500) {
        return 25;
        }
    else {
        return "cannot travel that far";
        }
    }