const rndInt = randomIntFromInterval(1, 3)

function getComputerChoice() {
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    let compChoice = rndInt;
    if (compChoice == rock) {
        return 'roca';
    } else if (compChoice == paper) {
        return 'paper';
    } else if (compChoice == scissors) {
        return 'scissrs';
    }
}

getComputerChoice()


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
 