let guessListContainer = document.querySelector(".js-guess-container");
let currentGuessField = document.querySelector(".js-guess-field");
let newGameButton = document.querySelector(".js-new-game-button");
let guessSubmitButton = document.querySelector(".js-submit-guess");

let target;

function generateTarget() {
    return Math.floor(Math.random() * 100) + 1;
}

function resetGame() {
    // korábbi tippek törlése
    guessListContainer.innerHTML = "";
    // input mező tartalmának törlése
    currentGuessField.value = "";
}

function startGame() {
    resetGame();
    target = generateTarget();
}

function submitGuess(event) {
    event.preventDefault();
    let guessValue = Number.parseInt(currentGuessField.value);
    console.log(guessValue, typeof guessValue);
    if (Number.isNaN(guessValue)) {

    } else if (guessValue < 1 || guessValue > 100) {

    }
    alert("klikk");
}

startGame();
newGameButton.addEventListener("click", startGame);
guessSubmitButton.addEventListener("click", submitGuess);

console.log(target);