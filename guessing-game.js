function guessingGame() {
    let randomNumber = Math.floor(Math.random()*100);
    let numGuesses = 0;
    let finished = false;
    function checkGuess(guess){
        if(finished) return "The game is over, you already won!";
        numGuesses++;
        if(guess=== randomNumber){ 
            finished = true;
            return `You win! You found ${randomNumber} in ${numGuesses} guesses.`
        }
        if(guess>randomNumber) return `${guess} is too high!`
        return `${guess} is too low!`;
    }
    return checkGuess;
}

module.exports = { guessingGame };
