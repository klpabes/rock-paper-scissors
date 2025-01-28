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