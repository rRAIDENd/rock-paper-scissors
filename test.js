/*
Include notes
1. Everytime button clicked, start a round 
2. compare value from button clicked and generate random selection from computer
3. update winner of round
*/

//global val for player and comp scores
let compScore = 0;
let playerScore = 0;

// starts 1 round
function startRound(selection){
    // resetDOM(); //reset DOM to original state
    let comp = computerSelection(); //calls function to generate random choice
    // let comp = 'rock';
    let whoWon;
    document.querySelector('.player').textContent = 'Player: ' + selection;
    document.querySelector('.comp').textContent = 'Comp: ' + comp;
    console.log('Comp: ' + comp);
    console.log('Player: ' + selection);


    if (comp === 'rock' && selection === 'paper'){
        whoWon = 'player';
    } else if (comp === 'rock' && selection === 'scissors'){
        whoWon = 'comp';
    } else if (comp === 'paper' && selection === 'scissors'){
        whoWon = 'player';
    } else if (comp === 'paper' && selection === 'rock'){
        whoWon = 'comp';
    } else if (comp === 'scissors' && selection === 'rock'){
        whoWon = 'player';
    } else if (comp === 'scissors' && selection === 'paper'){
        whoWon = 'comp';
    } else {
        whoWon = 'tie';
    } 

    updateResult(whoWon);
    // display score
    document.querySelector('.score').textContent = 'player: ' + playerScore + '\n' + 'Comp: ' + compScore;
    if (playerScore == 5){
        alert('Player Wins!');
        resetDOM();
    } else if ( compScore == 5){
        alert('Comp Wins!');
        resetDOM();
    } else{
        console.log('player: ' + playerScore + '\n' + 'Comp: ' + compScore);
    }
    
}

// generate int, convert int to choice and return
function computerSelection(){
    const comp = document.querySelector('.comp-selection');
    let index = Math.floor(Math.random() * (3 - 1 + 1) + 1) ;
    switch (index){
        case 1: 
            comp.src = './images/the-rock.jpg'
            return 'rock';
        case 2:
            comp.src = './images/paper.jpg'
            return 'paper';
        case 3:
            comp.src = './images/scissors-1.jpg'
            return 'scissors';
    }
}

// update result and score then display 
function updateResult(result){
    if (result === 'player'){
        document.querySelector('.result').textContent = 'Player wins the round!';
        console.log('Player wins the round!');
        return playerScore += 1;
    } else if (result === 'comp'){
        compScore += 1;
        document.querySelector('.result').textContent = 'Computer wins the round!';
        console.log('Computer wins the round!');
    } else if (result === 'tie'){
        document.querySelector('.result').textContent = 'Tie!';
        console.log('TIE!');
    }
}

function resetDOM(){
    document.querySelector('.player').textContent = '-';
    document.querySelector('.comp').textContent = '-';
    document.querySelector('.result').textContent = '-';
    document.querySelector('.score').textContent = '-'

    // resets score
    playerScore = 0;
    compScore = 0;
}

// Everytime player clicks button it starts round. Pull button value and compare to comp selection
function getButtonValue(e){
    let selection = (e.target.value);
    startRound(selection);
 
}

// display image based on button value
function showImage(e){
    let clicked = (e.target.value);
    const player = document.querySelector('.player-selection');

    switch (clicked){
        case 'rock':
            player.src = './images/the-rock.jpg';
            break;
        case 'paper':
            player.src = './images/paper.jpg';
            break;
        case 'scissors':
            player.src = './images/scissors-1.jpg';
            break;
    }   

}

const buttons = Array.from(document.querySelectorAll('button'));

// apply eventListener to all buttons
buttons.forEach((button) =>{
    button.addEventListener('click', showImage);
    button.addEventListener('click', getButtonValue);
    
});


