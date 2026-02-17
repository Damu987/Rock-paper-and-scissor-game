let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

const moves = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
    if (playerScore === maxScore || computerScore === maxScore) return;

    const computerChoice = moves[Math.floor(Math.random() * moves.length)];

    const playerBox = document.getElementById("playerMove");
    const computerBox = document.getElementById("computerMove");

    // Remove previous styles
    playerBox.classList.remove("winner", "attack");
    computerBox.classList.remove("winner", "attack");

    let resultText = "";

    // ✅ STEP 1: Show ROCK first + apply shake
    playerBox.innerHTML = `
        <img src="image/rock.png" 
             class="move-img player-hand shake">
    `;

    computerBox.innerHTML = `
        <img src="image/rock.png" 
             class="move-img computer-hand shake">
    `;

    document.getElementById("result").innerText = "Rock... Paper... Scissors...";

    // ✅ STEP 2: Wait for shake animation
    setTimeout(() => {

        // Reveal actual moves (keep color classes)
        playerBox.innerHTML = `
            <img src="image/${playerChoice}.png" 
                 class="move-img player-hand">
        `;

        computerBox.innerHTML = `
            <img src="image/${computerChoice}.png" 
                 class="move-img computer-hand">
        `;

        // ✅ STEP 3: Determine winner
        if (playerChoice === computerChoice) {
            resultText = "It's a Draw!";
        } 
        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            playerScore++;
            playerBox.classList.add("attack", "winner");
            resultText = "You Win This Round!";
        } 
        else {
            computerScore++;
            computerBox.classList.add("attack", "winner");
            resultText = "Computer Wins This Round!";
        }

        // Update UI
        document.getElementById("result").innerText = resultText;
        document.getElementById("playerScore").innerText = playerScore;
        document.getElementById("computerScore").innerText = computerScore;

        // Final winner
        if (playerScore === maxScore || computerScore === maxScore) {
            document.getElementById("result").innerText =
                playerScore === maxScore
                    ? "🎉 You Won The Game!"
                    : "💻 Computer Won The Game!";
            document.getElementById("playAgain").classList.remove("hidden");
        }

    }, 900); // must match shake duration
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").innerText = 0;
    document.getElementById("computerScore").innerText = 0;
    document.getElementById("result").innerText = "Make your move!";

    document.getElementById("playerMove").innerText = "?";
    document.getElementById("computerMove").innerText = "?";

    document.getElementById("playerMove").classList.remove("winner", "attack");
    document.getElementById("computerMove").classList.remove("winner", "attack");

    document.getElementById("playAgain").classList.add("hidden");
}


