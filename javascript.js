let choice_str = "";
const choices = ["rock", "paper", "scissors"]


function getComputerChoice(i) {
    switch (i) {
        case 0:
            choice_str = "rock"
            console.log(`The computer chose ${choice_str}.`)
            return choice_str
            break
        case 1:
            choice_str = "paper"
            console.log(`The computer chose ${choice_str}.`)
            return choice_str
            break
        case 2:
            choice_str = "scissors"
            console.log(`The computer chose ${choice_str}.`)
            return choice_str
            break
    }
}


let playerScore = 0;
let cpuScore = 0;

function rockPaperScissors(playerChoice, computerChoice) {
    
    if (playerChoice === computerChoice) {
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. You draw!`)
        console.log(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. You lose!`)
        cpuScore += 1;
        console.log(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return cpuScore  
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. You win!`)
        playerScore += 1;
        console.log(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return playerScore
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. You lose!`)
        cpuScore += 1;
        console.log(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return cpuScore  
    } else if (playerChoice==="paper" && computerChoice==="rock") {
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. You win!`)
        playerScore += 1;
        console.log(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return playerScore
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log (`You chose ${playerChoice}. CPU chose ${computerChoice}. You lose!`)
        cpuScore += 1;
        console.log(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return cpuScore  
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log(`You chose ${playerChoice}. CPU chose ${computerChoice}. You win!`)
        playerScore += 1;
        console.log(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return playerScore
    }
}

function game(playerMove) {
    
    let computerChoice = Math.floor(Math.random() * 3);
    let cpuMove = getComputerChoice(computerChoice);
    rockPaperScissors(playerMove, cpuMove);
    
}

const btn = document.querySelectorAll('#btn');


btn.forEach((button) => {
    button.addEventListener("click", function(e) {
        let playerMove = (e.target.innerText);
        playerMove = playerMove.toLowerCase();
        game(playerMove);
        document.getElementById("pScore").textContent = playerScore;
        document.getElementById("cScore").textContent = cpuScore;

        if (cpuScore === 5 || playerScore === 5) {
            displayResult();
        }

    })
})

let announce;
let btnParent;

function displayResult() {
    const newButton = document.createElement("button");
    newButton.setAttribute("id", "playAgainButton");
    newButton.textContent = "Play Again?"
    const cont = document.querySelector(".content");
    const playButtons = document.querySelectorAll("#btn");
    console.log(playButtons)

    if (playerScore === 5) {
        announce = document.createElement("div");
        console.log("child created")
        announce.textContent = "YOU WIN! You may play again by using the button below.";
        announce.setAttribute("id", "resultTable");
        cont.appendChild(announce);
        console.log("child appended")
        btnParent = playButtons[0].parentNode;
        playButtons.forEach(button => btnParent.removeChild(button));
    } else if ( cpuScore === 5) {
        announce = document.createElement("div");
        console.log("child created")
        announce.textContent = "YOU LOSE! You may play again by using the button below.";
        announce.setAttribute("id", "resultTable");
        cont.appendChild(announce);
        console.log("child appended")
        btnParent = playButtons[0].parentNode;
        playButtons.forEach(button => btnParent.removeChild(button));
    }

    cont.appendChild(newButton);
    const startAgain = document.querySelector("#playAgainButton");
    startAgain.addEventListener ("click", function(e) {
        cont.removeChild(announce);
        cont.removeChild(newButton);
        if (btnParent) {
            playButtons.forEach(button => btnParent.appendChild(button));
        }

        playerScore = 0;
        cpuScore = 0;
        document.getElementById("pScore").textContent = playerScore;
        document.getElementById("cScore").textContent = cpuScore;
    });


}






