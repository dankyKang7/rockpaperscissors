
/*This script will take in the input of a user and the input
and a randomized comptuer input (rock,paper,scissors) depending on
the combination the game will output win, loss or tie from the
users perspective */

//Get the user to play a game


function computerplay() {
    //generate
    var index = ['rock','scissors','paper']
    var random = Math.floor(Math.random()*3)
    return index[random]
}

function playerplay(){
    var playerSelection = prompt("Please select your option")
    return playerSelection.toLowerCase()
}

function playRound(player_sel,computer_sel){
    //condition player wins
    if (
            (player_sel == 'rock' && computer_sel == 'scissors')  ||
            (player_sel == 'scissors' && computer_sel == 'paper') ||
            (player_sel == 'paper' && computer_sel == 'rock')
        ) {
            round_output = 'You Win! '+player_sel+' beats '+computer_sel
            round_num    = 0
        }
    //condition tie
    else if (player_sel == computer_sel){
            round_output = 'DRAW!'
            round_num    = 1

    }
    //condition player loses
    else {
            round_output = 'You Lose! '+computer_sel+' beats '+player_sel
            round_num = 2
    }
    //console.log(round_output,round_num)
    return [round_output,round_num]
    
}



/*var test_1 = playRound(playerplay(),computerplay())
console.log(test_1[0])
console.log(test_1[1])*/
function game()
{
var i =0;
var j =0;
var score = [0,0];
  while (i < 5 && j < 5)
  {
    var round_result =playRound(playerplay(),computerplay())
        if (round_result[1] == 0){
            i++;
            score[0] += 1;
            
            console.log(round_result[0])
        }
        else if (round_result[1]== 2){
            j++;
            score[1] += 1
            console.log(round_result[0])
        }  else {
            console.log(round_result[0])
        }
    console.log(score[0],score[1])
  }
  return score
}
console.log(game())

function showWinner(){
    var result = game()
    if (result[0] > result[1]){
        winner = 'Player has bested the computer! the final score is player:'+score[0]+' computer:'+score[1]
    }
    else {
        winner = 'Computer has bested the player the final score is player:'+score[0]+' computer:'+score[1]
    }
    console.log(winner)
    return winner
}