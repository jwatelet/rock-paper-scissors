let playerPoints = 0;
let computerPoints = 0;


document.querySelector(".rock").addEventListener("click", (e) => playRound("rock"));
document.querySelector(".paper").addEventListener("click", (e) => playRound("paper"));
document.querySelector(".scissors").addEventListener("click", (e) => playRound("scissors"));
document.querySelector(".reset").addEventListener("click", (e) => resetGame());

function getComputerChoice() {

  var r = Math.floor(Math.random() * 3);

  switch (r) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function calculateResult(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock"
  ) {
    return 1;
  } else {
    return -1;
  }
}


function resetGame() {
  playerPoints = 0;
  computerPoints = 0;
  setPlayerScore(playerPoints);
  setComputerScore(computerPoints);
  setGameLog("");
  toggleButtons();
}

function toggleButtons() {
  document.querySelectorAll("button")
    .forEach((button) => button.classList.toggle("hidden"));
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  let roundResult = calculateResult(playerSelection, computerSelection);

  if (roundResult === 1) {
    setGameLog(`You Win! ${playerSelection} beats ${computerSelection}`);
    playerPoints++;
  } else if (roundResult === 0) {
    setGameLog("It's a tie! Neither win");
  } else {
    setGameLog(`You Lose! ${computerSelection} beats ${playerSelection}`);
    computerPoints++;
  }
  setPlayerScore(playerPoints);
  setComputerScore(computerPoints);

  if (playerPoints >= 5 && playerPoints > computerPoints) {
    setGameLog(`Player wins!`);
    toggleButtons();
  } else if (computerPoints >= 5 && computerPoints > playerPoints) {
    setGameLog("Computer wins!");
    toggleButtons();
  }
}

function setPlayerScore(score) {
  const playerScoreDiv = document.querySelector(".playerScore");

  playerScoreDiv.textContent = score;
}

function setComputerScore(score) {
  const computerScoreDiv = document.querySelector(".computerScore");

  computerScoreDiv.textContent = score;
}

function setGameLog(text) {
  const logDiv = document.querySelector(".log");

  logDiv.textContent = text;
}

