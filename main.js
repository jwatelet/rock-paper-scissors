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

function playRound(playerSelection, computerSelection) {

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


function game() {

  let playerPoints = 0;
  let computerPoints = 0;

  console.log("It's FT3 game !");
  while (playerPoints < 3 && computerPoints < 3) {

    let playerSelection = prompt("What's your weapon ? Paper, rock or scissors ?");
    let computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === 1) {
      console.log(`"You Lose! ${playerSelection} beats ${computerSelection}"`);
      playerPoints++;
    } else if (roundResult === 0) {
      console.log("It's a tie! Neither win");
    } else {
      console.log(`"You Lose! ${computerSelection} beats ${playerSelection}"`);
      computerPoints++;
    }

    console.log(`Player points : ${playerPoints}, computer points : ${computerPoints}`);
  }

  if (playerPoints > computerPoints) {
    console.log(`Player win!`)
  }
}

game();