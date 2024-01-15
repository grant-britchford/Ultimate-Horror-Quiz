document.addEventListener('DOMContentLoaded', function(){
    let buttons=document.getElementsByClassName("button");

    for(let button of buttons){
        button.addEventListeners('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert(`You Clicked Submit!`)
            } else {
                let gameType= this.getAttribute('data-type');
                alert(`You Clicked ${gameType}`);
            }
        })
    }
})

function runGame(){

}
function checkAnswer(){

}
function calucateCorrectAnswer(){

}
function incrementScore(){

}
function displayQuestion(){

}

