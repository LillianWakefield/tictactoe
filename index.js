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
function selectSpace(){
    const whoseTurn = document.querySelector('.whoseTurnIsItAnyway').textContent;

    //Checks if game is still active and if game square is unoccupied
    if(this.textContent === '' && (whoseTurn === ready1 ||whoseTurn === ready2)){
        turnCounter +=1;
        if(turnCounter === 1){
            $('.instructions').css("visibility", "hidden");
        };
        //Updates header based on current player and toggles player for next turn   
        if(currentPlayer === player1){
            this.textContent = 'X';
            currentPlayer = player2;
            if(turnCounter <9 ){
                updateHeader(ready2);
            }
            //Updates header for end game in case of draw
            else{
                updateHeader(winCat);
            };
        }
        else if (currentPlayer === player2) {
            this.textContent = 'O';
            currentPlayer = player1;
            updateHeader(ready1);
    };
        //Checks for win conditions each turn
        checkWinConditions();
    };
};

//Updates header based on gameplay
function updateHeader(message){
    $('.whoseTurnIsItAnyway').text(message);
    if(message === win1 || message === win2){
        $('.whoseTurnIsItAnyway').addClass('blinkyVictory');
    };
};

//Checks for win conditions each turn
function checkWinConditions(){
    //Creates array with current game state each turn
    const inner = [];
    const squaresCheck = document.querySelectorAll('.space');
    squaresCheck.forEach(square => inner.push(square.textContent));

    //Defines win conditions
    const winCons = [
        inner.slice(0,3).join(''), 
        inner.slice(3,6).join(''), 
        inner.slice(6).join(''), 
        inner[0]+inner[3]+inner[6], 
        inner[1]+inner[4]+inner[7], 
        inner[2]+inner[5]+inner[8], 
        inner[0]+inner[4]+inner[8], 
        inner[2]+inner[4]+inner[6]
    ];
    
    //Checks for win conditions and updates header
    winCons.forEach(winCon => {
        if(winCon ==='XXX'){
            return updateHeader(win1);
        }
        else if (winCon ==='OOO'){
            return updateHeader(win2);
        };
    });
};

//Get's things started and adds click listener to each board space
$(document).ready(function(){
    const squaresReady = document.querySelectorAll('.space');
    squaresReady.forEach(square => square.addEventListener('click', selectSpace));
});
