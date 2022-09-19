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
/*
function getPlayerChoice(){
    let playerChoice=null;
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
    for (let i = 0; i < n; i++){
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
}*/

const imgPlayer = document.querySelectorAll(".player__hand");
console.table(imgPlayer);
const imgMachine = document.querySelectorAll(".machine__hand");

//hide all imgplayer and imgmachine that doesnt have the class #default on load event listener//
window.addEventListener('load', () => {
    imgPlayer.forEach((img) => {
        if (img.classList.contains('default')) {
            img.classList.toggle('hide');
        }
    }
    );
    imgMachine.forEach((img) => {
        if (img.classList.contains('default')) {
            img.classList.toggle('hide');
        }
    }
    );
});
const buttons = document.querySelectorAll(".player__button");
//add event listener to all buttons
//when button is clicked, check the class of the button, and display the corresponding image
//hide all other images

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        imgPlayer.forEach((img) => {
            if (img.classList.contains(button.classList[1]) && img.classList.contains('hide')) {
                img.classList.toggle('hide');
            } else if (!img.classList.contains(button.classList[1]) && !img.classList.contains('hide')) {
                img.classList.toggle('hide');
            }
                
            }
        );
        });
});

