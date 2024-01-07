const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Who was the serial killer that inspired Thomas Harris when writing Silence of the lambs?",
        choice1: "<Ed Gein>",
        choice2: "<Alfredo Balli Trevino>",
        choice3: "<Walter Ellis>",
        answer: 2
    },
    {
        question: "In 1993 who decapitated his wifes lover and presented her the head?",
        choice1: "<Harold Shipman>",
        choice2: "<Roy Norris>",
        choice3: "<Stephen Schap>",
        answer: 3
    },
    {
        question: "Who terrorised Whitechapel in 1888?",
        choice1: "<Springheeled Jack>",
        choice2: "<Albert Fish>",
        choice3: "<Jack the Ripper>",
        answer: 3
    },
    {
        question: "What was the reason given by Dana Sue Gray for her 1994 muredr spree?",
        choice1: "<Retail Therapy>",
        choice2: "<Voices in her head>",
        choice3: "<Excitement>",
        answer: 1
    },
    {
        question: "What Australian serial killer was inspired by Chucky the doll from the Childs Play movie",
        choice1: "<Samuel Betts>",
        choice2: "<Martin Bryant>",
        choice3: "<Edmund Kemper>",
        answer: 2
    },
    {
        question: "Which serial killer in 1972 killed because of a misplaced belief that warped his perception?",
        choice1: "<Herbert Mullin>",
        choice2: "<Brenda Spencer>",
        choice3: "<Ted Bundy>",
        answer: 1
    },
    {
        question: "Jerry Brudos murdered women because of a fetish for what item?",
        choice1: "<Shoes>",
        choice2: "<Underwear>",
        choice3: "<Dresses>",
        answer: 1
    },
    {
        question: "Tracy Edwards escaped which serial killer which then led to the killers arrest?",
        choice1: "<Ted Bundy>",
        choice2: "<Jeffery Dahmer>",
        choice3: "<Ed Gein>",
        answer: 2
    },
    {
        question: "Mark Branch was inspired by which movie killer?",
        choice1: "<Freddy Krueger>",
        choice2: "<Micheal Myers>",
        choice3: "<Jason Vorhees>",
        answer: 3
    },
    {
        question: "The Canadian serial killer Gilbert Paul Jordan was known as?",
        choice1: "<Boozing Barber>",
        choice2: "<Sweeney Todd",
        choice3: "<The butcher of Lyons>",
        answer: 1
    },
    {
        question: "Who is the Toy Box Killer?",
        choice1: "<Nicolas Claux>",
        choice2: "<Charlie Brandt>",
        choice3: "<David Parker Ray>",
        answer: 3
    },
    {
        question: "Daniel LaPlante stalked the family he killed how?",
        choice1: "<Living in the families basement?>",
        choice2: "<Living in the families walls>",
        choice3: "<Living in the families attic>",
        answer: 2
    },
    {
        question: "The angel of death Josef Mengele died in which year?",
        choice1: "<1959>",
        choice2: "<1979>",
        choice3: "<1949>",
        answer: 2
    },
    {
        question: "The Mad Butcher operated in which city during the 1930s",
        choice1: "<Cleveland>",
        choice2: "<Cincinatti>",
        choice3: "<New Orleans>",
        answer: 1
    },
    {
        question: "Dennis Rader aka B.T.K. worked as what type of technician?",
        choice1: "<Computer Technician>",
        choice2: "<Lab Technician>",
        choice3: "<Alarm Technician>",
        answer: 3
    },
    {
        question: "Gary Ridgway the Green River Killer served in which US military branch?",
        choice1: "<Airforce>",
        choice2: "<Navy>",
        choice3: "<Marines>",
        answer: 2
    },
    {
        question: "Tsutomu Miyazaki siad who commanded him to kill?",
        choice1: "<Rat Man>",
        choice2: "<Dog Man>",
        choice3: "<Cat Man>",
        answer: 1
    },
    {
        question: "Which country has had the most serial kilers?",
        choice1: "<Iceland>",
        choice2: "<The Phillippines>",
        choice3: "<United States>",
        answer: 3
    },
    {
        question: "Norman Bates was inspired by which serial killer who had an obsessive bond with his mother?",
        choice1: "<Ted Bundy>",
        choice2: "<Ed Gein>",
        choice3: "<Peter Sutcliffe>",
        answer: 2
    },
    {
        question: "Richard Delmer Boyer copied which horror film for his 1982 murder?",
        choice1: "<Texas Chainsaw Massacre>",
        choice2: "<Halloween 2>",
        choice3: "<Last House on the Left>",
        answer: 2
    }
];

const CORRECT_Answer = 6;
const MAX_QUESTIONS = 15;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("/scores.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    choices.forEack(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(! acceptAnswers)return;

        acceptAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if(classToApply === "correct"){
            incrementScore(CORRECT_Answer);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();