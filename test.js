
function player(){
    console.log("click");
} 

const buttons = document.querySelectorAll('button');

buttons.forEach((i) => {
    i.addEventListener('click', player());
});