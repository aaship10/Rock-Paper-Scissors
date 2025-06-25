let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

//function of computer picking a random move
function pickComputerMove()
{
  const randomNumber = Math.random();
  let computerChoice = '';
  if(randomNumber>=0 && randomNumber<(1/3))
  {
    computerChoice = 'rock';
  }
  else if(randomNumber>=(1/3) && randomNumber<(2/3))
  {
    computerChoice = 'paper';
  }
  else if(randomNumber>=(2/3) && randomNumber<=1)
  {
    computerChoice = 'scissors';
  }

  return computerChoice;

}

//function to compare playermove and computer move and displaying
function playGame(playerMove)
{
  const computerChoice = pickComputerMove();
  let result = '';
  if(playerMove === 'scissors')
  {
    if(computerChoice === 'rock')
      result = 'You Lose.';
    else if(computerChoice === 'paper')
      result = 'You win.';
    else if(computerChoice === 'scissors')
      result = 'Tie.';
  }
  else if(playerMove === 'paper')
  {
    if(computerChoice === 'rock')
      result = 'You win.';
    else if(computerChoice === 'paper')
      result = 'Tie.';
    else if(computerChoice === 'scissors')
      result = 'You lose.';
  }
  else if(playerMove === 'rock')
  {
    if(computerChoice === 'rock')
      result = 'Tie.';
    else if(computerChoice === 'paper')
      result = 'You lose.';
    else if(computerChoice === 'scissors')
      result = 'You win.';
  }

  if(result === 'You win.')
    score.wins+=1;
  else if(result === 'You lose.')
    score.losses+=1;
  else if(result === 'Tie.')
    score.ties+=1;

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerChoice}-emoji.png" class="move-icon"> Computer`; 

}

//function to update the score
function updateScoreElement()
{
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}