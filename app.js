const rockButton = document.querySelector('#rbtn');
const paperButton = document.querySelector('#pbtn');
const scissorsButton = document.querySelector('#sbtn');
const results = document.querySelector('.resultsContainer');
const computerResults = document.querySelector('.computerChoiceContainer');
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function win() {
    playerScore++;
    results.textContent = 'You Win!';
    results.style.cssText = 'color: green';
    userScore_span.textContent = `User Score = ${playerScore}`;
}

function lose() {
    computerScore++;
    results.textContent = 'You lose!';
    results.style.cssText = 'color: red';
    computerScore_span.textContent = `Computer Score = ${computerScore}`;
}

function tie() {
    results.textContent = 'Tie! Try Again';
    results.style.cssText = 'color: white';
}

function endofGame() {
    if (playerScore === 5) {
        alert('You Win!');
        location.reload();
        
    } else if (computerScore === 5) {
        alert('You Lose!');
        location.reload();
    }
}

function playRound(playerSelection) {
    const computerChoice = getComputerChoice();
    if (playerSelection === 'rock' && computerChoice === 'Rock') {
        computerResults.textContent = 'Computer Choice: ' + computerChoice;
        tie();
    } else if (playerSelection === 'rock' && computerChoice === 'Paper') {
        computerResults.textContent = 'Computer Choice: ' + computerChoice;
        lose();
    } else if (playerSelection === 'rock' && computerChoice === 'Scissors') {
        computerResults.textContent = 'Computer Choice: ' + computerChoice;
        win();
    }

    else if (playerSelection === 'paper' && computerChoice === 'Rock') {
        computerResults.textContent = 'Computer Choice: ' + computerChoice;
        win();
    } else if (playerSelection === 'paper' && computerChoice === 'Paper') {
        computerResults.textContent = 'Computer Choice: ' + computerChoice;
        tie();
    } else if (playerSelection === 'paper' && computerChoice === 'Scissors') {
        computerResults.textContent = 'Computer Choice: ' + computerChoice;
        lose();
    }

    else if (playerSelection === 'scissors' && computerChoice === 'Rock') {
        computerResults.textContent = 'Computer Choice: ' + computerChoice;
        lose();
    } else if (playerSelection === 'scissors' && computerChoice === 'Paper') {
        computerResults.textContent = 'Computer Choice: ' + computerChoice;
        win();
    } else if (playerSelection === 'scissors' && computerChoice === 'Scissors') {
        computerResults.textContent = 'Computer Choice: ' + computerChoice;
        tie();
    }

    endofGame();
}

function main() {
    rockButton.addEventListener('click', function(e) {
        getComputerChoice();
        playRound('rock');
    });
    
    paperButton.addEventListener('click', function(e) {
        getComputerChoice();
        playRound('paper');
    });
    
    scissorsButton.addEventListener('click', function(e) {
        getComputerChoice();
        playRound('scissors');
    });
}

main();