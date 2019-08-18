
/*This script will take in the input of a user and the input
and a randomized comptuer input (rock,paper,scissors) depending on
the combination the game will output win, loss or tie from the
users perspective */

//Get the user to play a game


function computerplay() {
    //generate a random whole number between 1 and 3
    var computerRandom = Math.floor(Math.random()*3)+1;
    if (computerRandom == 1){
        computerSelection = 'Rock'
    } else if (computerRandom == 2){
        computerSelection = 'Paper'
    } else {
        computerSelection = 'Scissors'
    }
    return computerSelection
}
console.log(computerplay())
function playerplay(){
    var playerSelection = prompt("Please select your option")
    /*if (selection == 'Rock'){
        continue
    } else {
        continue
    }*/
    return playerSelection
}
console.log(playerplay())

function playRound(playerSelection, computerSelection){
    //rock
    if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        rount_output = 'You Win! Rock beats Scissors!'
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        rount_output = 'You Lose! Paper beats Rock!'
    //paper
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        round_output = 'You Win! Paper beats Rock!'
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        round_output = 'You Lose! Scissors beats Paper'
    //Scissors
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        round_output = 'You Win! Scissors beats Paper'
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        round_output == 'You Lose! Rock beats Scissors'
    } else {
        round_output == 'Tie!'
    }
}
playRound()
/*
function game(){

}*/
