//rock paper scissors game
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
  }
}
function getPlayerChoice(){
    let playerChoice = prompt('Do you choose rock, paper or scissors?');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}
let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

function  playRound(){
    if (playerChoice === computerChoice){
        return 'It\'s a draw!';
    }
    if (playerChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'You lose! Paper beats rock.';
        } else {
            return 'You win! Rock beats scissors.';
        }
    }
    if (playerChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'You lose! Scissors beats paper.';
        } else {
            return 'You win! Paper beats rock.';
        }
    }
    if (playerChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'You lose! Rock beats scissors.';
        } else {
            return 'You win! Scissors beats paper.';
        }
    }
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        if (result.includes('win')){
            playerScore++;
        } else if (result.includes('lose')){
            computerScore++;
        }
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
    }
    if (playerScore > computerScore){
        return 'You win the game!';
    } else if (playerScore < computerScore){
        return 'You lose the game!';
    } else {
        return 'It\'s a tie game!';
    }
}
console.log(game());