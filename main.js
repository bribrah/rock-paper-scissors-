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
     //initializes area where result
     const resultDiv = document.querySelector(".result");
    //Resets the game to 0 if at max score and erases previous game results
    if (score === 5 || score === -5){score = 0;}
    while (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild)
    }
    
    //init variables
    
    let rand, gameResult;

    //makes random choice for computer choice
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

        //detects if player has lost or won and shows messages
        if (score === 5){
            const presentWinner = document.createElement('h1');
            presentWinner.textContent = "YOU WIN THE GAME!";
            presentWinner.setAttribute("style", "color: blue; font-size: 4em" )
            resultDiv.appendChild(presentWinner);
        }
        else if (score === -5){
            const presentWinner = document.createElement('h1');
            presentWinner.textContent = "YOU LOSE THE GAME!"
            presentWinner.setAttribute("style", "color: red; font-size: 4em" )
            resultDiv.appendChild(presentWinner);
        }

        //displays results
        const presentCompChoice = document.createElement("h2")
        presentCompChoice.textContent = `The computer picked ${randChoice}`;

        const presentPlayerChoice = document.createElement("h2")
        presentPlayerChoice.textContent = `Your choice was ${playerChoice}`;

        const presentScore = document.createElement("h1");
        presentScore.textContent = `Current score is ${score}`;

        presentResult.textContent = gameResult;
        

        resultDiv.appendChild(presentCompChoice)
        resultDiv.appendChild(presentPlayerChoice);
        resultDiv.appendChild(presentResult);
        resultDiv.appendChild(presentScore);
        
        
    }


const choices =  document.querySelectorAll('button');
choices.forEach((button) => button.addEventListener('click', function(){
    playRound(button.id);
}));
