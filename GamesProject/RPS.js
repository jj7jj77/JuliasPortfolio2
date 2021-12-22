let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");

/*caching the DOM: storing something for the future use*/
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    //setup a random number to select for computer
    //selects a number between 0 and 1 (1 not-inclusive)
    const randomNumber = Math.floor(Math.random() * 3); /*the computer generates the number between 1 and 3*/
    return choices[randomNumber]; /*displays the r,p,s chocies based off the randomNumber*/
}
function win(playerChoice, computerChoice) {
    playerScore++; //update the score
    playerScore_span.innerHTML = playerScore; //display the score in html
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = playerChoice + " beats " + computerChoice + ". You Win!"; //displays the who won that round
}
function lose(playerChoice, computerChoice) {
    computerScore++; //update the score
    computerScore_span.innerHTML = computerScore; //display the score in html
    result_div.innerHTML = computerChoice + " beats " + playerChoice + ". You Lost!";  //displays the who won that round
}
function draw(playerChoice, computerChoice) {
    result_div.innerHTML = playerChoice + " ties with " + computerChoice + ". You Tie!";//displays the who won that round
}

function game(playerChoice) {  
    const computerChoice = getComputerChoice();  /*to get the computerChoice*/
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
           break; /*breaks the statement or it will continue*/
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);
            break;
    }
} 
function main() {
    rock_div.addEventListener('click', function() { 
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}
main();