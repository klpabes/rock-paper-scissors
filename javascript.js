'use strict'

const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0, computerScore = 0;
let playing = true;

const roundStatus = document.querySelector('.round-status');
const scorePlayer = document.querySelector('.score-player');
const scoreComputer = document.querySelector('.score-computer');
const newGameBtn = document.querySelector('.new-game-btn');
const playerIcon = document.querySelector('#player-icon');
const computerIcon = document.querySelector('#computer-icon');
const divChoices = document.querySelector('.div-choices');

function getComputerChoice() {
    return Math.floor((Math.random() * 3));
}

function checkWinner(humanScore, computerScore) {
    if (humanScore >= 5 || computerScore >= 5) {
        playing = false;
        if (humanScore > computerScore) {
            roundStatus.textContent = 'You Win the Game.';
        } else if (humanScore < computerScore) {
            roundStatus.textContent = 'Computer Won the Game.';            
        } else {
            roundStatus.textContent = 'It\'s a tie!';
        }
    }
    return;
}

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) return;
    if (humanChoice === 'rock' && computerChoice === 'scissors'){
        roundStatus.textContent = 'You win, rock beats scissors';
        humanScore++;
        scorePlayer.textContent = humanScore;
        checkWinner(humanScore, computerScore);
        return;
    } else if (humanChoice === 'rock' && computerChoice === 'paper'){
        roundStatus.textContent = 'You lose, paper beats rock';
        computerScore++;
        scoreComputer.textContent = computerScore;
        checkWinner(humanScore, computerScore);
        return;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        roundStatus.textContent = 'You win, paper beats rock';
        humanScore++;
        scorePlayer.textContent = humanScore;
        checkWinner(humanScore, computerScore);
        return;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        roundStatus.textContent = 'You lose, scissors beat paper';
        computerScore++;
        scoreComputer.textContent = computerScore;
        checkWinner(humanScore, computerScore);
        return
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        roundStatus.textContent = 'You lose, rock beats scissors';
        computerScore++;
        scoreComputer.textContent = computerScore;
        checkWinner(humanScore, computerScore);
        return;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        roundStatus.textContent = 'You win, scissors beat paper';
        humanScore++;
        scorePlayer.textContent = humanScore;
        checkWinner(humanScore, computerScore);
        return;
    } else if (humanChoice === computerChoice) {
        roundStatus.textContent = 'Equal choices, no winner this time';
        checkWinner(humanScore, computerScore);
        return;
    } else {
        console.log(`You picked ${humanChoice}, computer picked ${computerChoice}`)
        console.log('Invalid choice');
        return;
    }
}


function updateIcons(humanChoice, computerChoice) {
    const iconsArr = ['&#9994;','&#9995;','&#9996;'];

    playerIcon.innerHTML = iconsArr[humanChoice];
    computerIcon.innerHTML = iconsArr[computerChoice];
}


divChoices.addEventListener('click', e => {
    let target = e.target;
    const humanChoice = target.id;
    const computerChoice = getComputerChoice();
    if (playing) {
        switch(target.id) {
            case 'rock':
                playRound(humanChoice, choices[computerChoice]);
                updateIcons(+target.getAttribute('data-id'), computerChoice);
                break;
            case 'paper':
                playRound(humanChoice, choices[computerChoice]);
                updateIcons(+target.getAttribute('data-id'), computerChoice);
                break;
            case 'scissors':
                playRound(humanChoice, choices[computerChoice]);
                updateIcons(+target.getAttribute('data-id'), computerChoice);
                break;
        }
    }
})

function newGame() {
    playing = true;

    humanScore = 0;
    computerScore = 0;
    roundStatus.textContent = 'Choose between rock, paper or scissors';
    scorePlayer.textContent = 0;
    scoreComputer.textContent = 0;

    playerIcon.innerHTML = '&#128540';
    computerIcon.innerHTML = '&#128540';
}

newGameBtn.addEventListener('click', newGame);