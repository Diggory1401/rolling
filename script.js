'use strict'

const img = document.querySelector('img')
const player0 = document.querySelector('.player0');
const player1 = document.querySelector('.player1');
const pointPlayer0 = document.querySelector('.point0');
const pointPlayer1 = document.querySelector('.point1');
const numberCurrent0 = document.querySelector('.number-current0');
const numberCurrent1 = document.querySelector('.number-current1');

const newGame = document.querySelector('.new-game');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');

let result, current, activePlayer, playing;

const init = function() {
    result = [0, 0];
    current = 0;
    activePlayer = 0;
    playing = true;

    pointPlayer0.textContent = 0;
    pointPlayer1.textContent = 0;   
    numberCurrent0.textContent = 0;
    numberCurrent1.textContent = 0;

    player0.classList.remove('win');
    player1.classList.remove('win');
    player0.classList.add('bg-player');
    player1.classList.remove('bg-player');
}

init();

img.classList.add('hidden')

const switchPlayer = function() {
    document.querySelector(`.number-current${activePlayer}`).textContent = 0;
    current = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('bg-player');
    player1.classList.toggle('bg-player');
}

roll.addEventListener('click', function() {
    if (playing === true) {
        img.classList.remove('hidden');
        let numberRandom = Math.trunc(Math.random()*6) + 1;
        img.src = `./img/img-${numberRandom}.PNG`;
        
        if(numberRandom != 1) {
            current += numberRandom;
            document.querySelector(`.number-current${activePlayer}`).textContent = current;
        }
        else {
            result[`${activePlayer}`] = 0;
            document.querySelector(`.point${activePlayer}`).textContent = 0;
            switchPlayer();
        }
    }
})
 
hold.addEventListener('click', function() {
    if (playing === true) {
        result[`${activePlayer}`] += current; 
        document.querySelector(`.point${activePlayer}`).textContent = result[`${activePlayer}`];

        if(result[`${activePlayer}`] >= 20) {
            playing = false;
            document.querySelector(`.player${activePlayer}`).classList.remove('bg-player');
            document.querySelector(`.player${activePlayer}`).classList.add('win');
            document.querySelector(`.number-current${activePlayer}`).textContent = 0;
            img.classList.add('hidden');
        }
        else {
            switchPlayer();
        }
    }
})

newGame.addEventListener('click', init)