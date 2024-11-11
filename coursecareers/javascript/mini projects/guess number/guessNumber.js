let num = Math.round(Math.random() * 100);
var numGuesses = 0;

function reset() {
  num = Math.round(Math.random() * 100);
  numGuesses = 0;
  hint.innerHTML = "";
}

function makeGuess() {
  const guess = Number(document.getElementById("guess").value);
  const guessInput = document.getElementById("guess");
  const feedback = document.getElementById("feedback");
  feedback.innerHTML = "";
  const hint = document.getElementById("hint");
  numGuesses++;
  document.getElementById("num-guesses").innerHTML = numGuesses;

  if (guess === num) {
    feedback.innerHTML = "Yes, the number was: " + num;
    reset();
  } else if (guess > num) {
    hint.innerHTML = "The number is less than " + guess;
  } else {
    hint.innerHTML = "The number is more than " + guess;
  }
  guessInput.value = "";
}
