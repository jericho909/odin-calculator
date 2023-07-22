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




function getPlayerChoice() {
    let playerChoice;

    do {
        playerChoice = prompt("Make your choice: rock, paper or scissors?").toLowerCase()
    } while (!choices.includes(playerChoice))
    return playerChoice
}

let playerScore = 0;
let cpuScore = 0;

function rockPaperScissors(playerChoice, computerChoice) {
    
    if (playerChoice === computerChoice) {
        alert(`You chose ${playerChoice}. CPU chose ${computerChoice}. You draw!`)
        alert(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        alert(`You chose ${playerChoice}. CPU chose ${computerChoice}. You lose!`)
        cpuScore += 1;
        alert(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return cpuScore  
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        alert(`You chose ${playerChoice}. CPU chose ${computerChoice}. You win!`)
        playerScore += 1;
        alert(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return playerScore
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        alert(`You chose ${playerChoice}. CPU chose ${computerChoice}. You lose!`)
        cpuScore += 1;
        alert(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return cpuScore  
    } else if (playerChoice==="paper" && computerChoice==="rock") {
        alert(`You chose ${playerChoice}. CPU chose ${computerChoice}. You win!`)
        playerScore += 1;
        alert(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return playerScore
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        alert (`You chose ${playerChoice}. CPU chose ${computerChoice}. You lose!`)
        cpuScore += 1;
        alert(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return cpuScore  
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        alert(`You chose ${playerChoice}. CPU chose ${computerChoice}. You win!`)
        playerScore += 1;
        alert(`The current score is: CPU: ${cpuScore}, Player: ${playerScore}`)
        return playerScore
    }
}

function game() {
    let counter = 0
    while (counter < 5) {
        let playerMove = getPlayerChoice();
        let computerChoice = Math.floor(Math.random() * 3);
        let cpuMove = getComputerChoice(computerChoice);
        rockPaperScissors(playerMove, cpuMove)
        counter += 1;
    }
    alert(`The final score is: CPU: ${cpuScore}, Player: ${playerScore}`)
}

game();
