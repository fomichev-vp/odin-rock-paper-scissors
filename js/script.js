// function that returns choice from the computer
function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const i = Math.floor(Math.random() * 3);
  return choice[i];
}

// function one round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === computerSelection) {
    return ["It's a draw!", 0, 0];
  } else {
    switch (playerSelection) {
      case 'ROCK':
        if (computerSelection === 'PAPER') {
          return ['You lose! Paper beats Rock.', 0, 1];
        } else {
          return ['You win! Rock beats Scissors.', 1, 0];
        }
        break;
      case 'PAPER':
        if (computerSelection === 'SCISSORS') {
          return ['You lose! Scissors beat Paper.', 0, 1];
        } else {
          return ['You win! Paper beats Rock.', 1, 0];
        }
        break;
      case 'SCISSORS':
        if (computerSelection === 'ROCK') {
          return ['You lose! Rock beats Scissors.', 0, 1];
        } else {
          return ['You win! Scissors beat Paper.', 1, 0];
        }
        break;
    }
  }
}

// main function for game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundResult;
  let gameResult;
  for (let i = 0; i < 5; i++) {
    const playerSelection = window.prompt('Please, enter your choice:');
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    roundResult = result[0];
    playerScore += result[1];
    computerScore += result[2];
    console.log(roundResult, playerScore, computerScore);
    window.alert(`Computer chose ${computerSelection}. \n${roundResult}`);
  }
  if (playerScore > computerScore) {
    gameResult = `Congratulations! You won the game!
You beat the computer with a score ${playerScore} : ${computerScore}.`;
  } else if (playerScore < computerScore) {
    gameResult = `Unfortunately, you lost!
Computer beat you with a score ${computerScore} : ${playerScore}.`;
  } else {
    gameResult = `Wow! What a tough battle!
That's a draw with a score ${playerScore} : ${computerScore}.`;
  }
  window.alert(gameResult);
}

game();
