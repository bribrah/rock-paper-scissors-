function rockPaperScissors(playerChoice, compChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" && compChoice === "scissors") {
        return "You Win!";
    }
    else if (playerChoice === "paper" && compChoice === "rock") {
        return "You Win!";
    }
    else if (playerChoice === "scissors" && compChoice === "paper") {
        return "You Win!";
    }
    else if (playerChoice === compChoice) {
        return "Tie!";
    }
    else if (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper") {
        return "You have to pick rock paper or scissors!"
    }
    else {
        return "You Lose!";
    }
}


let score = 0;
const presentResult = document.createElement("h1");
function playRound(playerChoice) {
    let rand, gameResult;
    rand = Math.floor((Math.random() * 3) + 1);
        if (rand === 1) {
            randChoice = "scissors";
        }
        else if (rand === 2) {
            randChoice = "paper";
        }
        else {
            randChoice = "rock";
        }
        gameResult = rockPaperScissors(playerChoice, randChoice);

        if (gameResult === "You Win!"){
            score++;
        }
        else if (gameResult === "You Lose!"){
            score--;
        }



        const presentCompChoice = document.createElement("h2")
        presentCompChoice.textContent = `The computer picked ${randChoice}`;

        const presentPlayerChoice = document.createElement("h2")
        presentPlayerChoice.textContent = `Your choice was ${playerChoice}`;

        const presentScore = document.createElement("h1");
        presentScore.textContent = `Current score is ${score}`;

        const resultDiv = document.querySelector(".result");
        presentResult.textContent = gameResult;

        while (resultDiv.firstChild) {
            resultDiv.removeChild(resultDiv.firstChild)
        }
        

        resultDiv.appendChild(presentCompChoice)
        resultDiv.appendChild(presentPlayerChoice);
        resultDiv.appendChild(presentResult);
        resultDiv.appendChild(presentScore);
        
        
    }


const choices =  document.querySelectorAll('button');
choices.forEach((button) => button.addEventListener('click', function(){
    playRound(button.id);
}));
