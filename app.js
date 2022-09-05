function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const rndInt = randomIntFromInterval(1, 3);

let c = '';
let r = 'Rock';
let p = 'Paper';
let s = 'Scissors';

function getComputerChoice() {
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    let compChoice = rndInt;
    switch (compChoice) {
        case rock:
            c = r;
            return c;
            break;
        case paper:
            c = p;
            return c;
            break
        case scissors:
            c = s;
            return c;
            break
    }
}

// let playerSelectionCaseSensitive = 'scissors';
// let playerSelection = playerSelectionCaseSensitive.toLocaleLowerCase();

let playerSelection = prompt('Your choice: ').toLowerCase();


console.log('Player: ' + playerSelection)
console.log('Computer: ' + getComputerChoice())




const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Rock') {
        console.log('Tie! Try Again');
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        console.log('You lose! Paper beats rock');
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        console.log('You win! Rock beats scissors');
    }

    else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        console.log('You Win! Paper beats rock');
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        console.log('Tie! Try Again');
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        console.log('You lose! Scissors beats paper');
    }

    else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        console.log('You lose! Rock beats scissors');
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        console.log('You win! Scissors beats paper');
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        console.log('Tie! Try Again');
    }
}

playRound(playerSelection, computerSelection);



// let playerSelection = prompt('Select your choice: ').toLowerCase();

// function game(playerSelection, computerSelection) {
//     for (let i = 0; i < 5; i++) {

//     }
// }

// game(playerSelection, computerSelection);