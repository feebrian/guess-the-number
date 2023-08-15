// document.querySelector(".check").addEventListener("click", function () {
//   console.log(document.querySelector(".guess-number").value);
// });

const randInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const body = document.querySelector("body");

const buttonStart = document.querySelector(".start");
const buttonCheck = document.querySelector(".check");
const buttonRestart = document.querySelector(".restart");
const secretNumber = document.querySelector(".secret-number");
const numberClue = document.querySelector(".number-clue");
const currentScore = document.querySelector(".current-score");
const highscore = document.querySelector(".highscore");

/**
 *
 * Game logic start here
 */

buttonRestart.addEventListener("click", function () {
  document.querySelector(".guess-number").value = "";
  secretNumber.textContent = "?";
  body.style.background = "aqua";
  numberClue.textContent = "click start button...";
  currentScore.textContent = "20";
});

buttonStart.addEventListener("click", function () {
  secretNumber.setAttribute("id", randInt(0, 20));
  numberClue.textContent = "start guessing...";
});

buttonCheck.addEventListener("click", function () {
  let guessNumber = Math.floor(document.querySelector(".guess-number").value);
  let secretNum = Math.floor(secretNumber.getAttribute("id"));
  let score = currentScore.textContent;
  let topScore = highscore.textContent;

  if (guessNumber > secretNum) {
    numberClue.textContent = "too high!";
    currentScore.textContent = score -= 1;
  }

  if (guessNumber < secretNum) {
    numberClue.textContent = "too low!";
    currentScore.textContent = score -= 1;
  }

  if (guessNumber === secretNum) {
    secretNumber.textContent = secretNum;
    body.style.background = "green";
    numberClue.textContent = "you win!!!";
    if (topScore < score) {
      highscore.textContent = score;
      return;
    }
    // highscore.textContent = score;
    // return;
  }
});
