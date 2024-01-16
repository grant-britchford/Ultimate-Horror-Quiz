document.addEventListener("DOMContentLoaded", function(){
   let buttons= document.getElementsByTagName("button");
   for(let button of buttons) {
      button.addEventListener("click", function() {
         if(this.getAttribute("type") === submit) {
            alert("You Clicked Submit!");
         } else {
            let gameType = this.getAttribute("type");
            runGame(game);
         }
      })
   }
   runGame(game);
})

function runGame(game) {
   let questions = "myQuestions";
}
function displaymyQuestions() {
   [
      question, "Which serial killer inspired author Thomas Harris to write Silence of the Lambs?",
      answers, 'Ed Gein', 'Alfredo Balli Trevino', 'Walter Ellis',
      correctAnswer, B,
   ]
}
  


