`use strict`;

// storing elements in the variable

// html elemnts
// input box
const guessBox = document.querySelector(`.guess`);

// check btn
const checkButton = document.querySelector(`.check`);

// again btn
const again = document.querySelector(`.again`);

// message
const message = document.querySelector(`.message`);

// score
const score = document.querySelector(`.score`);

// highscore
const highscore = document.querySelector(`.highscore`);

// secret number
const num = document.querySelector(`.number`);

// css elements
// body
const body = document.querySelector(`body`).style;

// secret number from 1 to 20
const secretNum = Math.floor(Math.random() * 20) + 1;

// storing the secretNum
let newSecNum = secretNum;

// function to tell the user the  input is correct or not
const changeMessage = () => {
  let newScore = score.textContent;

  // giving hint to the user that the number is correct or not
  if (!guessBox.value) {
    // when the number above 20
    message.textContent = `No number has been guessed ! ...`;
  } else if (guessBox.value > newSecNum) {
    // when the number is higher than secret number
    message.textContent = `To High !! 😅`;

    if (score.textContent > 0) {
      //to update score
      score.textContent--;

      if (score.textContent == 0) {
        // to update background colour
        body.backgroundcolor = `#f95959`;

        // to update message
        message.textContent = `you loose the game...`;
      }
    }
  } else if (guessBox.value < newSecNum) {
    // when the number is lower than the secret number
    message.textContent = `To Low !! ☹️`;

    if (score.textContent > 0) {
      //to update the score
      score.textContent--;

      // to update message
      if (score.textContent == 0) {
        // to update message
        message.textContent = `you loose the game...`;

        // to update background
        body.backgroundColor = `f95959`;
      }
    }
  } else if (guessBox.value == newSecNum) {
    // when the number is correct
    message.textContent = `Winner 🎊`;

    // to change colour
    body.backgroundColor = `#60b347`;

    // to update the highscore
    highscore.textContent = newScore;

    // to show the correct number
    num.textContent = newSecNum;
  } /*else if (score.textContent == 0) {
    message.textContent = `you loose the game...`;
  }*/
};

// function to reset the values
const resetValue = () => {
  // to reset message
  message.textContent = `start guessing...`;

  // to reset num
  num.textContent = `?`;

  // to reset score
  score.textContent = 20;

  // to reset input value
  guessBox.value = ``;

  // to reset baground colour
  body.backgroundColor = `#222`;

  // to reset secret number
  let secNum = Math.floor(Math.random() * 20) + 1;

  // reassining the value os newSecNum
  newSecNum = secNum;
};

// listening the events on web page
// to listen the events of again button and reload the page
again.addEventListener(`click`, resetValue);

// to listen the events of check button and update the message
checkButton.addEventListener(`click`, changeMessage);
