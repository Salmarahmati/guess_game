"use strict";
console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Answer😎!";
// document.querySelector(".Number").textContent = 18;
// document.querySelector(".score").textContent = 19;
document.querySelector(".guess").value = 16;
const myNumber = document.querySelector(".guess").value;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".score").textContent = score;
// document.querySelector(".Number").textContent = secretNumber;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  console.log(guessNumber);


  if (!guessNumber) {
    DisplayMessage("No Number!");
  }

  // win
  else if (secretNumber === guessNumber) {
    // document.querySelector(".Number").textContent = "😀Yes!";
    DisplayMessage("Correct Guess😎");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".Number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".Highscore").textContent = highScore;
    }
  } else if (secretNumber !== guessNumber) {
    DisplayMessage(secretNumber > guessNumber) ? "It's LOW☹" : "It's HIGH☹";
    score--;
    document.querySelector(".score").textContent = score;
  }
  else {
    DisplayMessage("You lose the game!😑");
    score = 0;
    document.querySelector(".score").textContent = score;
  }
})
// low
// else if (secretNumber > guessNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "It's LOW☹";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You lose the game!😑";
//     score = 0;
//     document.querySelector(".score").textContent = score;
//   }
//   // High
// } else if (secretNumber < guessNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "It's HIGH☹";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You lose the game!😑";
//     score = 0;
//     document.querySelector(".score").textContent = score;
//   }
// }
// });
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  DisplayMessage("Start Again!😉");
  document.querySelector(".Number").style.width = "15rem";
  document.querySelector(".guess").value = InputEvent;
  document.querySelector("body").style.backgroundColor = "#222";
});
function DisplayMessage(message) {
  document.querySelector(".message").textContent = message;
}