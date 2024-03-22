// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Random number:", randomNumber);
function checkGuess() {
    // Get user's guess
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Check if the guess is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        return;
    }
    

    // Provide feedback based on the guess
    if (userGuess === randomNumber) {
        alert("Congratulations! You guessed the correct number.");
        location.reload()
    } else if (userGuess < randomNumber) {
        alert("Too low! Try a higher number.");
        location.reload()
    } else (userGuess>randomNumber)
        alert("Too high! Try a lower number.");
        location.reload()

    
    
    
    
   
}