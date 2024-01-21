function buildQuiz() {}
function showResults() {}

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const score = document.getElementById('score');

buildQuiz();

submitButton.addEventListener('click', showResults);

const myQuestions = [
   
function buildQuiz(){
      const output = [];
      
      myQuestions.forEach(
         (currentQuestion) => {
     
           const answers = [];
           for(letter in currentQuestion.answers){
    
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }

      output.push(
         `<div class="question"> ${currentQuestion.question} </div>
         <div class="answers"> ${answers.join('')} </div>`
       );
     }
   );
 
   quiz.innerHTML = output.join('');
 }




