'use strict'

const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor((Math.random() * 3) + 1)];
}

function getHumanChoice() {
    let choice = prompt('Choose between rock, paper, scissors').toLowerCase();
    if (choice) {
        choice = choice.toLowerCase();
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice;
    }
        else {
            alert('Choose between rock, paper, and scissors');
            return;
        }
    } else {
        alert('Cancelled');
        return;
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`)
    if (humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('You win, rock beats scissors');
        humanScore++;
        return;
    } else if (humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('You lose, paper beats rock');
        computerScore++;
        return;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('You win, paper beats rock');
        humanScore++;
        return;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log('You lose, scissors beat paper');
        computerScore++;
        return
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose, rock beats scissors');
        computerScore++;
        return;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win, scissors beat paper');
        humanScore++;
        return;
    } else if (humanChoice === computerChoice) {
        console.log('Equal choices, no winner this time');
        return;
    } else {
        console.log('Invalid choice');
        return;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
