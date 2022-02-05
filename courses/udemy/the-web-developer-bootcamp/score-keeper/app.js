const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
};

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
};

const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playTo');

let winningScore = 3;
let isGameOver = false;
let gameMatches = 0;

const updateScores = (player, opponent) => {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
      gameMatches += 1;
    }
    if (player.score === opponent.score && player.score === winningScore - 1) {
      winningScore++;
    }
  }
  player.display.textContent = player.score;
};

const reset = () => {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
};

p1.button.addEventListener('click', () => {
  updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener('click', reset);
