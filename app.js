//rock paper scissors game

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
let playerImg = document.querySelectorAll(".player_img");
async function getPlayerChoice(){
    return new Promise((resolve) => {
        playerImg.forEach(img => img.addEventListener("click", function(){
            resolve(img.alt);
        }
    ));
    });
} 
async function  playRound(){
    let playerChoice = await getPlayerChoice();
    let computerarray = ["rock", "paper", "scissors"];
    let ComputerChoice = computerarray[getComputerChoice()];
    console.log(ComputerChoice);
    
    let wins = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper",
    }
    if (!wins[await playerChoice]){
        console.log("error");

    }else if (ComputerChoice == wins[playerChoice]){
        console.log("player wins");
        return 1;
    }else if (ComputerChoice == playerChoice){
        console.log("it's a tie");
    }else{
        console.log("computer wins");
        return 0; 
    }
}
async function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerDisplay = document.querySelector(".player_score");
    let computerDisplay = document.querySelector(".computer_score");
    while (playerScore < 5 && computerScore < 5){
        computerDisplay.textContent = computerScore;
        playerDisplay.textContent = playerScore;
        let result = await playRound();
        if (result == 1){
            playerScore++;
        }else if (result == 0){
            computerScore++;
        }   
    }
    if (playerScore > computerScore){
        console.log("Player wins game");
    }else{
        console.log("Computer wins game");
    }
}   
/*
let playerScore = document.querySelector('.player_score').textContent;
let computerScore = document.querySelector('.computer_score').textContent;
    playerScore = number[0].textContent;
    computerScore = number[1].textContent;
    let roundResult = playRound();
    if (roundResult === 1){
        console.log("before" + playerScore);
        playerScore++;
        console.log("after" + playerScore);
        number.forEach((num) => {
            if (num.classList.contains('score__player')){
                num.textContent = playerScore++;
            }
        });

    }else if (roundResult === -1){
        console.log("before" + computerScore);
        computerScore++;
        console.log("after" + computerScore);
        number.forEach((num) => {
            if (num.classList.contains('score__machine')){
                num.textContent = computerScore++;
            }
        }
        );
    }*/
game();