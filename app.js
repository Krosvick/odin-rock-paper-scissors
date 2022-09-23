//rock paper scissors game


const imgPlayer = document.querySelectorAll(".player__hand");
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

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    imgMachine.forEach((img2) => {
        if(!img2.classList.contains('hide')){
            img2.classList.toggle('hide');
        }
    }
    );
    switch (randomNumber) {
        case 0:
            imgMachine[0].classList.toggle('hide');
            return 'rock';
        case 1:
            imgMachine[1].classList.toggle('hide');
            return 'paper';
        case 2:
            imgMachine[2].classList.toggle('hide');
            return 'scissors';
  }
}
function  playRound(){
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice){
        return 0;
    }
    if (playerChoice === 'rock'){
        if (computerChoice === 'paper'){
            return -1;
        } else {
            return 1;
        }
    }
    if (playerChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return -1;
        } else {
            return 1;
        }
    }
    if (playerChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return -1;
        } else {
            return 1;
        }
    }
}
let playerScore = 0;
let computerScore = 0;
const number = document.querySelectorAll(".number");
function game(){
    playerScore = number[0].textContent;
    computerScore = number[1].textContent;
    let roundResult = playRound();
    if (roundResult === 1){
        playerScore++;
        number.forEach((num) => {
            if (num.classList.contains('score__player')){
                num.textContent = playerScore++;
            }
        });

    }else if (roundResult === -1){
        computerScore++;
        number.forEach((num) => {
            if (num.classList.contains('score__machine')){
                num.textContent = computerScore++;
            }
        }
        );
    }
    return playerScore, computerScore;
}
const buttons = document.querySelectorAll(".player__button");
//add event listener to all buttons
//when button is clicked, check the class of the button, and display the corresponding image
//hide all other images
let playerChoice = '';
    buttons.forEach((button) => { //literally thats the whole function of this chunk of code
    button.addEventListener('click', () => {
        if(playerScore <= 5 && computerScore <= 5){
            game();
        }
        imgPlayer.forEach((img, index) => {
            if(!img.classList.contains('hide')){
                img.classList.toggle('hide');
            }
            if (button.classList.contains('rock')){
                imgPlayer[0].classList.toggle('hide');
                playerChoice = 'rock';
            }
            else if (button.classList.contains('paper')){
                imgPlayer[1].classList.remove('hide');
                playerChoice = 'paper';
            }
            else if (button.classList.contains('scissors')){
                imgPlayer[2].classList.toggle('hide');
                playerChoice = 'scissors';
            }
            return playerChoice;
        });

            
        });
        
    });

