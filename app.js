const rndInt = randomIntFromInterval(1, 3)

function getComputerChoice() {
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    let compChoice = rndInt;
    switch (compChoice) {
        case rock:
            console.log('roca')
            break;
        case paper:
            console.log('paper')
            break
        case scissors:
            console.log('scissors');
            break
    }
}

getComputerChoice()


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
 