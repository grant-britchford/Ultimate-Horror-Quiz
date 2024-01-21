//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
//Questions and Options array
const quizArray = [
     {
      id: "0",
      question:"Which serial killer was the inspiration for Thomas Harris' Silence of the Lambs?",
      options: ["Ed Gein", "Alfredo Balli Trevino", "Walter Ellis"],
      correct: "Alfredo Balli Trevino"
   },
   {
      id: "1",
      question:"In 1992 who decapitated his wifes lover and presented her the head?",
      options: ["Harold Shipman", "Roy Norris", "Stephen Schap"],
      correct: "Roy Norris"
   },
   {
      id: "2",
      question:"Who terrorised the Whitechapel district of London in 1888?",
      options: ["Springheeled Jack", "Albert Fish", "Jack the Ripper"],
      correct: "Jack the Ripper"
   },
   {
      id: "3",
      question:"Which Australian serial killer was inspired by Chucky the doll of the Childs Play movies?",
      options: ["Johnathon Cruz", "Martin Bryant", "Edmund kemper"],
      correct: "Martin Bryant"
   },
   {
      id: "4",
      question:"Which serial killer in the 1970s killed because of a misplaced belief that warped his perception?",
      options: ["Herbert Mullin", "Brenda Spencer", "ted bundy"],
      correct: "Herbert Mullin",
   },
   {
      id: "5",
      question:"Jerry Brudos murdered womwn because of a fetish for which item?",
      options: ["Shoes", "Underwear", "Dresses"],
      correct: "Shoes", 
   },
   {
      id: "6",
      question:"Tracy Edwards escaped which serial killer which then led to his arrest?",
      options: ["Ted Bundy", "Jeffery Dahmer", "Ed Gein"],
      correct: "Jeffery Dahmer"
   },
   {
      id: "7",
      question:"Mark Branch was inspired by which movie killer?",
      options: ["Freddy Krueger", "Michael Myers", "Jason Vorhees"],
      correct: "Jason Vorhees"
   },
   {
      id: "8",
      question:"The Canadian serial killer Gilbert Paul Jordan was also known as which name?",
      options: ["Boozing Barber", "Sweeney Todd", "The butcher of Lyons"],
      correct: "Boozing Barber"
   },
   {
      id: "9",
      question:"Who was the Toy Box killer?",
      options: ["Nicolas Claux", "Charlie Brandt", "David Parker Ray"],
      correct: "David Parker Ray" 
   },
   {
      id: "10",
      question:"The angel of death Josef Mengele died in which year?",
      options: ["1959", "1979", "1949"],
      correctAnswer: "1979"
   },
   {
      id: "11",
      question:"Dennis Rader aka the B.T.K killer worked as what type of technician?",
      options: ["Computer technician", "Laboratory technician", "Alarm technician"],
      correct: "Alarm technician"
   },
   {
      id: "12",
      question:"Gary Ridgway a.k.a The Green River killer served in which military branch?",
      options: ["Airforce", "navy", "Army"],
      correct: "navy"
   },
   {
      id: "13",
      question:"Tsutomu Miyazaki blamed who for commanding him to kill?",
      options: ["The Rat man", "The Dog man", "The Cat man"],
      correct: "The Rat man"
   },
   { 
      id: "14",
      question:"Which country has the second most number of serial killers?",
      options: ["Iceland", "The Philippines", "The United States"],
      correct: "The Philippines"
   },
   {
      id: "15",
      question:"Norman bates of Psycho was based on which serial killer who had an obessive bond with his mother?",
      options: ["Ted Bundy", "Ed Gein", "Peter Sutcliffe"],
      correct: "Ed Gein"
   },
   {
      id: "16",
      question:"Richard Delmer Boyer copied which horroe movie for his 1982 murders?",
      options: ["The texas chainsaw massacre", "Halloween 2", "Last house on the left"],
      correct: "Halloween 2"
   },
   {
      id: "17",
      question:"Dana Sue Gray gave what reason for her 1994 murder spree?",
      options: ["Retail therapy", "Voices in her head", "The excitement"],
      correct: "Retail therapy"
   },
   {
      id: "18",
      question:"Daniel LaPlante stalked the family he murdered by living in...?",
      options: ["...Basement", "...Walls", "...Attic"],
      correct: "...Walls"
   },
   {
      id: "19",
      question:"Which unsolved case still haunts Finland?",
      options: ["Lake Inari", "Lake Orivesi", "Lake Bodom"],
      correct: "Lake Bodom" 
   }
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount === quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);
//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count === 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};
//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};
//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
    `;
        quizContainer.appendChild(div);
    }
}
//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText === quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}
//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}
//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});
//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
 