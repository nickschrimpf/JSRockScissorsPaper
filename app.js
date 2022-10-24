const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
let DEFAULT_CHOICE;
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WIN = 'PLAYER WON'
const RESULT_COMPUTER_WIN = 'COMPUTER WON'

let gameIsRunning = false;


const getPlayerChoice = ()  => {
    const selection  = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`,'').toUpperCase()
    if(
        selection !== ROCK &&
        selection !== PAPER && 
        selection !== SCISSORS
    ){
        DEFAULT_CHOICE = defualt()
        alert(`Your choice is invalid  ${DEFAULT_CHOICE} has been chosen for you`)
            return DEFAULT_CHOICE
    }
    return selection
    
}
const defualt = () => {
    const randomValue = Math.random();
    if(randomValue < .34){
        return ROCK
    } else if(randomValue < .67) {
        return PAPER
    }else {
        return SCISSORS
    }
}

const getCPUChoice =  () => {
    const randomValue = Math.random();
    if(randomValue < .34){
        return ROCK
    } else if(randomValue < .67) {
        return PAPER
    }else {
        return SCISSORS
    }
}

const getWinner = (cChoice,pChoice) => {
    return cChoice === pChoice ? RESULT_DRAW : cChoice === ROCK && pChoice === PAPER || 
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK ? RESULT_PLAYER_WIN : RESULT_COMPUTER_WIN

    // if(cChoice === pChoice){
    //     return RESULT_DRAW;
    // }else if(
    //     cChoice === ROCK && pChoice === PAPER || 
    //     cChoice === PAPER && pChoice === SCISSORS ||
    //     cChoice === SCISSORS && pChoice === ROCK
    // ){
    //     return RESULT_PLAYER_WIN
    // }
    // return RESULT_COMPUTER_WIN
}

startGameBtn.addEventListener('click',function() {
    gameIsRunning = true;
    console.log('Game is Starting....')
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
    const computerSelection = getCPUChoice();
    console.log(computerSelection);
    const winner = getWinner(computerSelection,playerSelection);
    console.log(winner)
    gameIsRunning = false
    console.log('Game has ended')
    let message = `You picked ${playerSelection}, the Computer picked ${computerSelection}`;
    console.log(message)
    if(winner === RESULT_DRAW){
        message = message + `the result is a Draw!`
        alert(message);
    }else if (winner === RESULT_PLAYER_WIN){
        message = message+`<br> You Win!`
        alert(message);
    }else {
        message = message+ '<br> you Lose!'
       
    }
    alert(message);
    console.log(message)
    
   
})