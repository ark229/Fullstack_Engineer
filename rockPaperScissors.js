const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
        console.log('User Input Error. Try again!');
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      
    }
  };
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return console.log('Tie Game!');
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return console.log('Computer Wins!');
      } else {
          console.log('User Wins!');
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return console.log('Computer Wins!');
      } else {
          console.log('User Wins!');
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return cosole.log('User Wins!');
      } else {
          console.log('Computer Wins!');
      }
    }
  }
    
   
  
  function playGame() {
    const userChoice = getUserChoice('rock', 'paper', 'scissors');
    const computerChoice = getComputerChoice();
    console.log('You picked ' + userChoice);
    console.log('Computer picked ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();