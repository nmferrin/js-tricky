function guessingGame() {
    // Generate a random number between 0 and 99
    const secretNumber = Math.floor(Math.random() * 100);
    let guesses = 0;
    let gameOver = false;

    // Return a function that checks the guess against the secret number
    return function(guess) {
        // If the game is already over, return the appropriate message
        if (gameOver) {
            return `The game is over, you already won!`;
        }

        // Increment the guess count
        guesses++;

        // Check if the guess is too high, too low, or correct
        if (guess < secretNumber) {
            return `${guess} is too low!`;
        } else if (guess > secretNumber) {
            return `${guess} is too high!`;
        } else {
            // Mark the game as over
            gameOver = true;
            return `You win! You found ${guess} in ${guesses} guesses.`;
        }
    };
}

