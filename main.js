// immutable global variables
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const btn = document.querySelector(".player-choice");
const playAgain = document.querySelector(".play-again");
const youWon = document.querySelector(".you-won");
const youLost = document.querySelector(".you-lost");
const youTied = document.querySelector(".you-tied");
const player = document.querySelector(".player-count-text");
const computer = document.querySelector(".computer-count-text");
const playerWins = document.querySelector(".player-wins");
const playerLoses = document.querySelector(".player-loses");
const changeBg = document.querySelector(".challenge-display");

// mutable global variables
let playerCount = 0;
let computerCount = 0;

rock.addEventListener("click", function () {
  // local variables
  let playerImg = document.querySelector(".guess-one");
  let computerImg = document.querySelector(".guess-two");
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const playerChoice = document.querySelector(".rock").value;
  let computerChoice =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

  //   player and computer images
  playerImg.src = `/img/${rockPaperScissors[0]}.png`;
  computerImg.src = `/img/${computerChoice}.png`;

  //   outcome decisions
  if (playerChoice === computerChoice) {
    // tied
    youLost.style.display = "none";
    youWon.style.display = "none";
    youTied.style.display = "block";

    // add 1 to each side
    playerCount++;
    player.innerHTML = playerCount;
    computerCount++;
    computer.innerHTML = computerCount;

    // change bg to blue
    changeBg.style.backgroundColor = "#007bff";
    changeBg.style.border = "none";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    // computer won
    youTied.style.display = "none";
    youWon.style.display = "none";
    youLost.style.display = "block";

    // add 1 to computer
    computerCount++;
    computer.innerHTML = computerCount;

    // change bg to red
    changeBg.style.backgroundColor = "#dc3545";
    changeBg.style.border = "none";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    // player won
    youTied.style.display = "none";
    youLost.style.display = "none";
    youWon.style.display = "block";

    // add 1 to player
    playerCount++;
    player.innerHTML = playerCount;

    // change bg to green
    changeBg.style.backgroundColor = "#28a745";
    changeBg.style.border = "none";
  }

  winner();
});

paper.addEventListener("click", function () {
  // local variables
  let playerImg = document.querySelector(".guess-one");
  let computerImg = document.querySelector(".guess-two");
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const playerChoice = document.querySelector(".paper").value;
  let computerChoice =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

  //   player and computer images
  playerImg.src = `/img/${rockPaperScissors[1]}.png`;
  computerImg.src = `/img/${computerChoice}.png`;

  //   outcome decisions
  if (playerChoice === computerChoice) {
    // tied
    youLost.style.display = "none";
    youWon.style.display = "none";
    youTied.style.display = "block";

    // add 1 to each side
    playerCount++;
    player.innerHTML = playerCount;
    computerCount++;
    computer.innerHTML = computerCount;

    // change bg to blue
    changeBg.style.backgroundColor = "#007bff";
    changeBg.style.border = "none";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    // player won
    youTied.style.display = "none";
    youWon.style.display = "block";
    youLost.style.display = "none";

    // add 1 to player
    playerCount++;
    player.innerHTML = playerCount;

    // change bg to green
    changeBg.style.backgroundColor = "#28a745";
    changeBg.style.border = "none";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    // player lost
    youTied.style.display = "none";
    youLost.style.display = "block";
    youWon.style.display = "none";

    // add 1 to computer
    computerCount++;
    computer.innerHTML = computerCount;

    // change bg to red
    changeBg.style.backgroundColor = "#dc3545";
    changeBg.style.border = "none";
  }

  winner();
});

scissors.addEventListener("click", function () {
  // local variables
  let playerImg = document.querySelector(".guess-one");
  let computerImg = document.querySelector(".guess-two");
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const playerChoice = document.querySelector(".scissors").value;
  let computerChoice =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

  //   player and computer images
  playerImg.src = `/img/${rockPaperScissors[2]}.png`;
  computerImg.src = `/img/${computerChoice}.png`;

  //   outcome decisions
  if (playerChoice === computerChoice) {
    // tied
    youLost.style.display = "none";
    youWon.style.display = "none";
    youTied.style.display = "block";

    // add 1 to each side
    playerCount++;
    player.innerHTML = playerCount;
    computerCount++;
    computer.innerHTML = computerCount;

    // change bg to blue
    changeBg.style.backgroundColor = "#007bff";
    changeBg.style.border = "none";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    // player lost
    youTied.style.display = "none";
    youWon.style.display = "none";
    youLost.style.display = "block";

    // add 1 to computer
    computerCount++;
    computer.innerHTML = computerCount;

    // change bg to red
    changeBg.style.backgroundColor = "#dc3545";
    changeBg.style.border = "none";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    // player won
    youTied.style.display = "none";
    youLost.style.display = "none";
    youWon.style.display = "block";

    // add 1 to player
    playerCount++;
    player.innerHTML = playerCount;

    // change bg to green
    changeBg.style.backgroundColor = "#28a745";
    changeBg.style.border = "none";
  }

  winner();
});

function winner() {
  if (playerCount >= 10) {
    youTied.style.display = "none";
    youLost.style.display = "none";
    youWon.style.display = "block";
    document.querySelector(".player").style.display = "none";
    document.querySelector(".computer").style.display = "none";
    playerLoses.style.display = "none";
    playerWins.style.display = "block";
    playAgain.style.display = "block";
  } else if (computerCount >= 10) {
    youTied.style.display = "none";
    youLost.style.display = "block";
    youWon.style.display = "none";
    document.querySelector(".player").style.display = "none";
    document.querySelector(".computer").style.display = "none";
    playerWins.style.display = "none";
    playerLoses.style.display = "block";
    playAgain.style.display = "block";
  } else if (playerCount === 10 && computerCount === 10) {
    youTied.style.display = "block";
    youLost.style.display = "none";
    youWon.style.display = "none";
    document.querySelector(".player").style.display = "none";
    document.querySelector(".computer").style.display = "none";
    playerWins.style.display = "none";
    playerLoses.style.display = "none";
    playAgain.style.display = "block";
  }
}

playAgain.addEventListener("click", function () {
  location.reload();
});

