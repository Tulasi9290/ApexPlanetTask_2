let currentTurn = "X";
let isGameOver = false;

const boxes = document.querySelectorAll(".box");
const statusText = document.querySelector(".status");
const resetButton = document.getElementById("reset");

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Function to check for a win
const checkWin = () => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      boxes[a].textContent &&
      boxes[a].textContent === boxes[b].textContent &&
      boxes[a].textContent === boxes[c].textContent
    ) {
      isGameOver = true;
      statusText.textContent = `${boxes[a].textContent} Wins!`;
      return;
    }
  }

  // Check for a draw
  if (Array.from(boxes).every(box => box.textContent !== "")) {
    statusText.textContent = "It's a Draw!";
    isGameOver = true;
  }
};

// Function to handle box clicks
const handleBoxClick = (e) => {
  if (isGameOver || e.target.textContent !== "") return;

  e.target.textContent = currentTurn;
  checkWin();

  if (!isGameOver) {
    currentTurn = currentTurn === "X" ? "O" : "X";
    statusText.textContent = `Turn for ${currentTurn}`;
  }
};

// Reset the game
const resetGame = () => {
  boxes.forEach(box => (box.textContent = ""));
  currentTurn = "X";
  isGameOver = false;
  statusText.textContent = "Turn for X";
};

// Add event listeners
boxes.forEach(box => box.addEventListener("click", handleBoxClick));
resetButton.addEventListener("click", resetGame);
