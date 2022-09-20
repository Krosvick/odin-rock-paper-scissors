//rock paper scissors game


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
let playerChoice = '';
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        imgPlayer.forEach((img) => {
            if (img.classList.contains(button.classList[1]) && img.classList.contains('hide')) {
                img.classList.toggle('hide');
                playerChoice = button.classList[1];


            } else if (!img.classList.contains(button.classList[1]) && !img.classList.contains('hide')) {
                img.classList.toggle('hide');
            }
                
            }
        );
        });
});

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
let computerChoice = getComputerChoice();

function  playRound(){
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
    let playerScore = 0;
    let computerScore = 0;
    while(true){
        let roundResult = playRound();
        if (roundResult === 1){
            playerScore++;
            number.forEach((num) => {
                if (num.classList.contains('player__score')){
                    num.textContent = playerScore;
                }
            });

        }else if (roundResult === -1){
            computerScore++;
            number.forEach((num) => {
                if (num.classList.contains('machine__score')){
                    num.textContent = computerScore;
                }
            }
            );
        }
        
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
    }
}
game();

