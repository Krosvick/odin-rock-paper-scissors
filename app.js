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
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
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
const number = document.querySelectorAll(".number");
function game(){
    let playerScore = number[0].textContent;
    let computerScore = number[1].textContent;
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
}
const buttons = document.querySelectorAll(".player__button");
//add event listener to all buttons
//when button is clicked, check the class of the button, and display the corresponding image
//hide all other images
let playerChoice = '';
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        imgPlayer.forEach((img, index) => {
            if (img.classList.contains(button.classList[1]) && img.classList.contains('default')) {
                if(img.classList.contains('hide')){
                    img.classList.toggle('hide');
                }
                playerChoice = button.classList[1];
            }else if(img.classList.contains(button.classList[1]) && !img.classList.contains('default') && img.classList.contains('hide')){
                if(imgPlayer[index-1].classList.contains('default') && !imgPlayer[index-1].classList.contains('hide')){
                    imgPlayer[index-1].classList.toggle('hide');
                }
                img.classList.toggle('hide');
                playerChoice = button.classList[1];
            }else if (!img.classList.contains(button.classList[1]) && !img.classList.contains('hide')) {
                img.classList.toggle('hide');
            }
        }
        );
        game();
        }
        
        );
});

