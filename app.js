// GAME FUNCTION:

// - player must guess a numner between a min and max
// -player get a certain amount of guesses\
// -Notify player of gueesses remaining
// Notify the player of the correct answer if loose
// -let player choose to play again


// Game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max);
    guessesLeft = 3;

// Ui elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign Ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// PLAY AGAIN EVENT LISTENER
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // check if won
    if(guess === winningNum){
        // // Disable input
        // guessInput.disabled = true;
        // // change border color
        // guessInput.style.borderColor = 'green';
        // // set Message
        // setMessage(`${winningNum} is correct!, YOU WIN!`, 'green');
        gameOver(true, (`${winningNum} is correct!, YOU WIN!`));

    } else {
        // wrong Number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game over --- lost
            gameOver(false, `Game Over, you lost. The correct Number was ${winningNum}`);

        //      // Disable input
        // guessInput.disabled = true;
        // // change border color
        // guessInput.style.borderColor = 'red';
        // // set Message
        // setMessage(`Game Over, you lost. The correct Number was ${winningNum}`, 'red');
        } else {
        // game continuous - answer wrong

        // change border color
        guessInput.style.borderColor = 'red';

         // clear Input
         guessInput.value = '';
            
        // Tell user its the wrong number
         setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');

        }

    }
});


// Game Over

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
        // change border color
        guessInput.style.borderColor = color;
        // set text color
        message.style.color = color;

        // set Message
        setMessage(msg);
        // play again
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
}


// getWinningNum 
function getRandomNum(min, max){
    return (Math.floor(Math.random()*(max-min +1)+min));
}


// set message

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

      

