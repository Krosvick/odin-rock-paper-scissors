//rock paper scissors game
const result = document.querySelector("#result");

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
        let result = await playRound();
        if (result == 1){
            playerScore++;
            playerDisplay.textContent = playerScore;
        }else if (result == 0){
            computerScore++;
            computerDisplay.textContent = computerScore;
        }   
    }
    if (playerScore > computerScore){
        console.log("Player wins game");
        result.childNodes[1].textContent = "You win!";
        result.style.display = "flex";
    }else{
        console.log("Computer wins game");
        result.childNodes[1].textContent = "You lose!";
        result.style.display = "flex";
    }
}   

game();