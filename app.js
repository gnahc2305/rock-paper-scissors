function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 3);

let c = '';
let r = 'Rock';
let p = 'Paper';
let s = 'Scissors';

function getComputerChoice() { // returns either 'Rock/Paper/Scissors'
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

// let playerSelection = prompt('Your choice: ').toLowerCase();


// console.log('Player: ' + playerSelection)
// console.log('Computer: ' + getComputerChoice())


const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Rock') {
        computerResults.textContent = 'Computer Choice: ' + computerSelection;
        results.textContent = 'Tie! Try Again';
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        computerResults.textContent = 'Computer Choice: ' + computerSelection;
        results.textContent = 'You lose! Paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        computerResults.textContent = 'Computer Choice: ' + computerSelection;
        results.textContent = 'You win! Rock beats scissors';
    }

    else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        computerResults.textContent = 'Computer Choice: ' + computerSelection;
        results.textContent = 'You Win! Paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        computerResults.textContent = 'Computer Choice: ' + computerSelection;
        results.textContent = 'Tie! Try Again';
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        computerResults.textContent = 'Computer Choice: ' + computerSelection;
        results.textContent = 'You lose! Scissors beats paper';
    }

    else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        computerResults.textContent = 'Computer Choice: ' + computerSelection;
        results.textContent = 'You lose! Rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        computerResults.textContent = 'Computer Choice: ' + computerSelection;
        results.textContent = 'You win! Scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        computerResults.textContent = 'Computer Choice: ' + computerSelection;
        results.textContent = 'Tie! Try Again';
    }
}

// playRound(playerSelection, computerSelection);

rockButton = document.querySelector('#rbtn');
paperButton = document.querySelector('#pbtn');
scissorsButton = document.querySelector('#sbtn');
results = document.querySelector('.resultsContainer');
computerResults = document.querySelector('.computerChoiceContainer');

rockButton.addEventListener('click', function(e) {
    // console.log('Your Choice: Rock')
    // console.log('Computer Choice: ' + computerSelection)
    playRound('rock', computerSelection);
});

paperButton.addEventListener('click', function(e) {
    // console.log('Your Choice: Paper')
    // console.log('Computer Choice: ' + computerSelection)
    playRound('paper', computerSelection);
});

scissorsButton.addEventListener('click', function(e) {
    // console.log('Your Choice: Scissors')
    // console.log('Computer Choice: ' + computerSelection)
    playRound('scissors', computerSelection);
});

// let playerSelection = prompt('Select your choice: ').toLowerCase();

// function game(playerSelection, computerSelection) {
//     for (let i = 0; i < 5; i++) {

//     }
// }

// game(playerSelection, computerSelection);