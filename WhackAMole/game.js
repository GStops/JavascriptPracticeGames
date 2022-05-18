const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector('#score');
let hitPosition = null;
let result = 0;
let currentTime = timeLeft.textContent;
function randomSquare(){ //test with using square[mole.id].classList.remove('mole');
    square.forEach(className => {
        className.classList.remove('mole');
    })

    let randomPosition = square [Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;

}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1;
            score.textContent = result;
        }
    })
});

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown (){
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime === 0){
        clearInterval(timerId);
        alert("Game over! Your final score is " + result);
        score.textContent = 0;
        result = 0;
        timeLeft.textContent = 60;
        currentTime = timeLeft.textContent;
        timerId = setInterval(countDown, 1000);
    }
}
let timerId = setInterval(countDown, 1000);
