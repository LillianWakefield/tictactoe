//Defines global variables

let player1 = 'Player 1';
let player2 = 'Player 2';
let currentPlayer = player1;
let turnCounter = 0;


function selectSpace(){
    const whoseTurn = document.querySelector('.whoseTurnIsItAnyway').innerHTML
    turnCounter +=1;
    console.log(turnCounter)

    if(this.innerHTML === '' && ((whoseTurn === 'Ready, Player 1?')||(whoseTurn ==='Ready, Player 2?'))){
        if(currentPlayer === player1){
            this.innerHTML = 'X';
            currentPlayer = player2;
            if(turnCounter <9 ){
            $('.whoseTurnIsItAnyway').html('Ready, Player 2?');
            }
            else{
                $('.whoseTurnIsItAnyway').html("Cat's game, no one wins!");
            }
        }
        
        else if (currentPlayer === player2) {
            this.innerHTML = 'O';
            currentPlayer = player1;
            if(turnCounter <9 ){
                $('.whoseTurnIsItAnyway').html('Ready, Player 1?');
                }
                else{
                    $('.whoseTurnIsItAnyway').html("Cat's game, no one wins!");
                }
    }
        
        checkWinConditions();
    }
}

//Defines and checks win conditions for each player

function checkWinConditions(){
    const a1 = document.querySelector('#a1').innerHTML
    const a2 = document.querySelector('#a2').innerHTML
    const a3 = document.querySelector('#a3').innerHTML

    const b1 = document.querySelector('#b1').innerHTML
    const b2 = document.querySelector('#b2').innerHTML
    const b3 = document.querySelector('#b3').innerHTML

    const c1 = document.querySelector('#c1').innerHTML
    const c2 = document.querySelector('#c2').innerHTML
    const c3 = document.querySelector('#c3').innerHTML

    const winCon1 = a1+a2+a3;
    const winCon2 = b1+b2+b3
    const winCon3 = c1+c2+c3

    const winCon4 = a1+b1+c1
    const winCon5 = a2+b2+c2
    const winCon6 = a3+b3+c3

    const winCon7 = a1+b2+c3
    const winCon8 = a3+b2+c1
    
    if(winCon1 == 'XXX'|| winCon2 == 'XXX' || winCon3 == 'XXX' || winCon4 == 'XXX' || winCon5 == 'XXX' || winCon6 == 'XXX' || winCon7  == 'XXX'|| winCon8 == 'XXX') {
        return $('.whoseTurnIsItAnyway').html('Player 1 wins!');
    }
    if(winCon1 == 'OOO'|| winCon2 == 'OOO' || winCon3 == 'OOO' || winCon4 == 'OOO' || winCon5 == 'OOO' || winCon6 == 'OOO' || winCon7  == 'OOO'|| winCon8 == 'OOO') {
        return $('.whoseTurnIsItAnyway').html('Player 2 wins!');
    }
}

//Get's things started and adds click listener to each board space/
$(document).ready(function(){
    const squares = document.querySelectorAll('.space')
    squares.forEach(square => square.addEventListener('click', selectSpace));
})
