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

function playerSelection(){
    let playerInput = prompt('Rock/Paper/Scissors: ');
    return playerInput.toLowerCase();
}

function playRound(playerSelection){
    let comp = computerSelection();
    let playerChoice = playerSelection;

    if (comp === 'rock' && playerChoice === 'paper'){
        console.log('Paper beats rock. Player wins the round!');
        return ('Player wins!');
    } else if (comp === 'rock' && playerChoice === 'scissors'){
        console.log('Rock beats scissors. Computer wins the round!');
        return ('Computer wins!');
    } else if (comp === 'paper' && playerChoice === 'scissors'){
        console.log('Scissors beats paper. Player wins the round!');
        return ('Player wins!');
    } else if (comp === 'paper' && playerChoice === 'rock'){
        console.log('Paper beats rock. Computer wins the round!');
        return ('Computer wins!');
    } else if (comp === 'scissors' && playerChoice === 'rock'){
        console.log('Rock beats scissors. Player wins the round!');
        return ('Player wins!');
    } else if (comp === 'scissors' && playerChoice === 'paper'){
        console.log('Scissors beats paper. Computer wins the round!');
        return ('Computer wins!');
    } else {
        console.log('Tie!');
    } 
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i=1; i <=5; i++){
        switch (play(computerPlay(),playerSelection())){
            case ('Player wins!'):
                playerScore += 1;
                break;
            case ('Computer wins!'):
                computerScore += 1;
                break;
        }
    }

    if (playerScore > computerScore){
        console.log('Final score:'+ '\n' + 'Player score: ' + playerScore + '\n' + 'Computer score: ' + computerScore);
        console.log('Player wins the game!!!');
    } else if (playerScore < computerScore){
        console.log('Final score:'+ '\n' + 'Player score: ' + playerScore + '\n' + 'Computer score: ' + computerScore);
        console.log('You lost to the computer :(');
    } else{
        console.log('Final score:'+ '\n' + 'Player score: ' + playerScore + '\n' + 'Computer score: ' + computerScore);
        console.log('It\'s a draw!');
    }


}