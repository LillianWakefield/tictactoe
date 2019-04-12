//Defines global variables: players, header messages, and initial game state
const player1 = 1;
const player2 = 2;

const ready1 = 'Ready, Player 1?';
const ready2 = 'Ready, Player 2?';

const win1 = 'Player 1 wins!';
const win2 = 'Player 2 wins!';
const winCat = "Cat's game, no one wins!";

let currentPlayer = player1;
let turnCounter = 0;

//Game play triggered by clicking on board
function selectSpace() {
    const whoseTurn = document.querySelector('.whoseTurnIsItAnyway').textContent;
    //Checks if game is still active and if game square is unoccupied
    if (this.textContent === '' && (whoseTurn === ready1 || whoseTurn === ready2)) {
        turnCounter += 1;
        if (turnCounter === 1) {
            $('.instructions').css("visibility", "hidden");
        };
        //Updates header based on current player and toggles player for next turn   
        if (currentPlayer === player1) {
            this.textContent = 'X';
            currentPlayer = player2;
            if (turnCounter < 9) {
                updateHeader(ready2);
            }
            //Updates header for end game in case of draw
            else {
                updateHeader(winCat);
            };
        } else if (currentPlayer === player2) {
            this.textContent = 'O';
            currentPlayer = player1;
            updateHeader(ready1);
        };
        //Checks for win conditions during game play
        if (turnCounter >= 5) {
            checkWinConditions();
        };
    };
};

//Updates header based on gameplay
function updateHeader(message) {
    $('.whoseTurnIsItAnyway').text(message);
    if (message === win1 || message === win2) {
        $('.whoseTurnIsItAnyway').addClass('blinkyVictory');
    };
};

function checkWinConditions() {
    //Defines win conditions
    const allSquares = document.querySelectorAll('.space');
    const winConditions = [
        [allSquares[0], allSquares[1], allSquares[2]],
        [allSquares[3], allSquares[4], allSquares[5]],
        [allSquares[6], allSquares[7], allSquares[8]],
        [allSquares[0], allSquares[3], allSquares[6]],
        [allSquares[1], allSquares[4], allSquares[7]],
        [allSquares[2], allSquares[5], allSquares[8]],
        [allSquares[0], allSquares[4], allSquares[8]],
        [allSquares[2], allSquares[4], allSquares[6]],
    ];

    //Checks for win conditions, updates header and board
    for (let i = 0; i < winConditions.length; i++) {
        const myArr = [];
        winConditions[i].forEach(winCondition => myArr.push(winCondition.textContent));
        const myString = myArr.join('');
        for (let j = 0; j < winConditions[i].length; j++) {
            if ((myString === 'XXX')) {
                updateHeader(win1);
                $(winConditions[i][j]).addClass('blinkyVictory');
            } else if ((myString === 'OOO')) {
                updateHeader(win2);
                $(winConditions[i][j]).addClass('blinkyVictory');
            };
        };
    }
};

//Get's things started and adds click listener to each board space
$(document).ready(function() {
    const squaresReady = document.querySelectorAll('.space');
    squaresReady.forEach(square => square.addEventListener('click', selectSpace));
});