/*
Include notes
1. Everytime button clicked, start a round 
2. compare value from button clicked and generate random selection from computer
3. update winner of round
*/


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
}

// generate int, convert int to choice and return
function computerSelection(){
    let index = Math.floor(Math.random() * (3 - 1 + 1) + 1) ;
    switch (index){
        case 1: 
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

// update result and return result
function updateResult(result){
    if (result === 'player'){
        document.querySelector('.result').textContent = 'Player wins the round!';
        console.log('Player wins the round!');
    } else if (result === 'comp'){
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
    document.querySelector('.result').textContent = '-!';
}

// Everytime player clicks button it starts round. Pull button value and compare to comp selection
function getButtonValue(e){
    let selection = (e.target.value);
    // console.log('Player: ' + selection);
    startRound(selection);


}

const buttons = Array.from(document.querySelectorAll('button'));

// apply eventListener to all buttons
buttons.forEach((button) =>{
    button.addEventListener('click', getButtonValue);
});


