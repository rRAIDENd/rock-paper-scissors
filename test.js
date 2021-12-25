/*
Include notes
1. Everytime button clicked, start a round 
2. compare value from button clicked and generate random selection from computer
3. update winner of round
*/





function getButtonValue(e){
    let selection = (e.target.value);
    let comp= 'paper';
    console.log(selection);

    if (comp === 'rock' && selection === 'paper'){
        console.log('Paper beats rock. Player wins the round!');
        return ('Player wins!');
    } else if (comp === 'rock' && selection === 'scissors'){
        console.log('Rock beats scissors. Computer wins the round!');
        return ('Computer wins!');
    } else if (comp === 'paper' && selection === 'scissors'){
        console.log('Scissors beats paper. Player wins the round!');
        return ('Player wins!');
    } else if (comp === 'paper' && selection === 'rock'){
        console.log('Paper beats rock. Computer wins the round!');
        return ('Computer wins!');
    } else if (comp === 'scissors' && selection === 'rock'){
        console.log('Rock beats scissors. Player wins the round!');
        return ('Player wins!');
    } else if (comp === 'scissors' && selection === 'paper'){
        console.log('Scissors beats paper. Computer wins the round!');
        return ('Computer wins!');
    } else {
        console.log('Tie!');
    } 

}

const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((button) =>{
    button.addEventListener('click', getButtonValue);
});

function testRound(playerSelection){
    
}