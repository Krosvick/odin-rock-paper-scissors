//rock paper scissors game

let playerScore = document.querySelector(".player_score").textContent;
let computerScore = document.querySelector(".computer_score").textContent;
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
let playerImg = document.querySelectorAll(".player_img");
function getPlayerChoice(){
    playerImg.forEach(img => img.addEventListener("click", function(){
        return img.alt;
    }));
} 
async function  playRound(){
    let playerChoice = await getPlayerChoice();
    let computerarray = ["rock", "paper", "scissors"];
    let ComputerChoice = computerarray[getComputerChoice()];
    
    let wins = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper",
    }
    if (!wins[await playerChoice]){
        console.log("error");
    }else if (ComputerChoice == wins[playerChoice]){
        playerScore++;
        console.log("player wins");
    }else if (ComputerChoice == playerChoice){
        computerScore++;
        console.log("it's a tie");
    }else{
        computerScore++;
        console.log("computer wins");
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
playRound();