const boxes = document.querySelectorAll("#btn");
const resetBtn = document.querySelector("#reset");
const newBtn = document.querySelector("#new-game");
const playerX = document.getElementById("X");
const playerY = document.getElementById("Y");
const winner = document.getElementById("winner");
let turnO = true;
resetBtn.onclick = function () {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turnO = true;
  playerX.innerText = "Player X Score: 0";
  playerY.innerText = "Player O Score: 0";
  winner.innerText = "Last Round Winner: None";
};
newBtn.onclick = function () {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turnO = true;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
      turnO = false;
      box.disabled = true;
    } else {
      box.innerText = "O";
      turnO = true;
      box.disabled = true;
    }
    box.style.backgroundColor = "#ffffff";
    checkWinner();
  });
});
let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let X = 0;
let O = 0;
function checkWinner() {
  for (pattern of winningPatterns) {
    pVal0 = boxes[pattern[0]].innerText;
    pVal1 = boxes[pattern[1]].innerText;
    pVal2 = boxes[pattern[2]].innerText;
    if (pVal0 != "" && pVal1 != "" && pVal2 != "") {
      if (pVal0 === pVal1 && pVal1 === pVal2) {
        winner.innerText = `Last Round Winner: ${pVal0}`;
        if (pVal0 === "X") {
          X++;
          playerX.innerText = `Player X score: ${X}`;
        } else if (pVal0 === "O") {
          O++;
          playerY.innerText = `Player O score: ${O}`;
        }
        boxes.forEach((box) => {
          box.disabled = true;
          box.style.backgroundColor = "#ffffff";
        });
      }
    }
  }
}
