let computerPlay = () => {
  let arrayRPS = ['rock', 'paper', 'scissors'];
  return arrayRPS[Math.floor(Math.random() * 3)];
};

let playRound = (playerSelection, computerSelection) => {
  if ((playerSelection === 'rock') & (computerSelection === 'paper')) {
    return 'You Lose! Paper beats Rock';
  } else if ((playerSelection === 'rock') & (computerSelection === 'rock')) {
    return 'Draw';
  } else if ((playerSelection === 'rock') & (computerSelection === 'scissors')) {
    return 'You win! Rock beats Scissors';
  } else if ((playerSelection === 'paper') & (computerSelection === 'paper')) {
    return 'Draw';
  } else if ((playerSelection === 'paper') & (computerSelection === 'rock')) {
    return 'You win! Paper beats Rock';
  } else if ((playerSelection === 'paper') & (computerSelection === 'scissors')) {
    return 'Your lose! Scissors beats Paper';
  } else if ((playerSelection === 'scissors') & (computerSelection === 'paper')) {
    return 'Your win! Scissors beats Paper';
  } else if ((playerSelection === 'scissors') & (computerSelection === 'rock')) {
    return 'You lose! Rock beats Scissors';
  } else if ((playerSelection === 'scissors') & (computerSelection === 'scissors')) {
    return 'draw';
  }
};

let playerScore = 0;
let computerScore = 0;

let ckeckWinner = () => {
  if (playerScore < computerScore) {
    console.log('The winner is the COMPUTER');
  } else {
    console.log('YOU!!! are the winner');
  }
};

let getScore = (playerSelection, computerSelection) => {
  if (
    playRound(playerSelection, computerSelection) === 'You Lose! Paper beats Rock' ||
    playRound(playerSelection, computerSelection) === 'Your lose! Scissors beats Paper' ||
    playRound(playerSelection, computerSelection) === 'You lose! Rock beats Scissors'
  ) {
    computerScore++;
  } else if (
    playRound(playerSelection, computerSelection) === 'You win! Rock beats Scissors' ||
    playRound(playerSelection, computerSelection) === 'You win! Paper beats Rock' ||
    playRound(playerSelection, computerSelection) === 'Your win! Scissors beats Paper'
  ) {
    playerScore++;
  }
  console.log('Player score: ' + playerScore);
  console.log('Computer score: ' + computerScore);
};

let game = () => {
  for (let i = 0; i < 5; i++) {
    let playerMove = prompt('Choose Rock, Paper or Scissors');
    playerSelection = playerMove.toLowerCase();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    getScore(playerSelection, computerSelection);
  }

  ckeckWinner();
};

game();
