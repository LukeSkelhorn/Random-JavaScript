var userInput = 'Rock';

userInput = userInput.toLowerCase();

function getComputerChoice() {
  var choice = Math.floor(Math.random() * 3);;
  
  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else if (choice === 2) {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Game was a tie';
  }
  if (userChoice === 'bomb') {
    return 'User Wins';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won';
    } else if (computerChoice === 'scissors') {
      return 'User Won';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer Won';
    } else if (computerChoice === 'rock') {
      return 'User Won';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Won';
    } else if (computerChoice === 'paper') {
      return 'User Won';
    }
  }
}

function playGame() {
  const userChoice = userInput;
  const computerChoice = getComputerChoice();
  
  console.log(`Users choice: ${userChoice}`);
  console.log(`Computers choice: ${computerChoice}`);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();