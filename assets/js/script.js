const quizArray = [
   {
      question:"Which serial killer was the inspiration for Thomas Harris' Silence of the Lambs?",
      choices: ["Ed Gein", "Alfredo Balli Trevino", "Walter Ellis"],
      answer: "Alfredo Balli Trevino"
   },
   {
      question:"In 1992 who decapitated his wifes lover and presented her the head?",
      choices: ["Harold Shipman", "Roy Norris", "Stephen Schap"],
      answer: "Roy Norris"
   },
   {
      question:"Who terrorised the Whitechapel district of London in 1888?",
      choices: ["Springheeled Jack", "Albert Fish", "Albert Fish",],
      answer: "Albert Fish"
   },
   {
      question:"Which Australian serial killerwas inspired by Chucky the doll of the Childs Play movies?",
      choices: ["Johnathon Cruz", "Martin Bryant", "Edmund kemper"],
      answer: "Martin Bryant"
   },
   {
      question:"Which serial killer in the 1970s killed because of a misplaced belief that warped his perception?",
      choices: ["Herbert Mullin", "Brenda Spencer", "ted bundy"],
      answer: "Herbert Mullin"
   },
   {
      question:"Jerry Brudos murdered womwn because of a fetish for which item?",
      choices: ["Shoes", "Underwear", "Dresses"],
      answer: "Shoes"
   },
   {
      question:"Tracy Edwards escaped which serial killer which then led to his arrest?",
      choices: ["Ted Bundy", "Jeffery Dahmer", "Ed Gein"],
      answer: "Jeffery Dahmer"
   },
   {
      question:"Mark Branch was inspired by which movie killer?",
      choices: ["Freddy Krueger", "Michael Myers", "Jason Vorhees"],
      answer:  "Jason Vorhees"
   },
   {
      question:"The Canadian serial killer Gilbert Paul Jordan was also known as which name?",
      choices: ["Boozing Barber", "Sweeney Todd", "The butcher of Lyons"],
      answer: "Boozing Barber"
   },
   {
      question:"Who was the Toy Box killer?",
      choices: ["Nicolas Claux", "Charlie Brandt", "David Parker Ray"],
      answer: "David Parker Ray" 
   },
   {
      question:"The angel of death Josef Mengele died in which year?",
      choices: ["1959", "1979", "1949"],
      answer: "1979"
   },
   {
      question:"Dennis Rader aka the B.T.K killer worked as what type of technician?",
      choices: ["Computer technician", "Laboratory technician", "Alarm technician"],
      answer: "Alarm technician"
   },
   {
      question:"Gary Ridgway a.k.a The Green River killer served in which military branch?",
      choices: ["Airforce", "navy", "Army"],
      answer: "navy"
   },
   {
      question:"Tsutomu Miyazaki blamed who for commanding him to kill?",
      choices: ["The Rat man", "The Dog man", "The Cat man"],
      answer: "The Rat man"
   },
   {
      question:"Which country has the second most number of serial killers?",
      choices: ["Iceland", "The Philippines", "The United States"],
      answer: "The Philippines"
   },
   {
      question:"Norman bates of Psycho was based on which serial killer who had an obessive bond with his mother?",
      choices: ["Ted Bundy", "Ed Gein", "Peter Sutcliffe"],
      answer: "Ed Gein"
   },
   {
      question:"Richard Delmer Boyer copied which horroe movie for his 1982 murders?",
      choices: ["The texas chainsaw massacre", "Halloween 2", "Last house on the left"],
      answer: "Halloween 2"
   },
   {
      question:"Dana Sue Gray gave what reason for her 1994 murder spree?",
      choices: ["Retail therapy", "Voices in her head", "The excitement"],
      answer: "Retail therapy"
   },
   {
      question:"Daniel LaPlante stalked the family he murdered by living in...?",
      choices: ["...Basement", "...Walls", "...Attic"],
      answer: "...Walls",
   },
   {
      question:"Which unsolved case still haunts Finland?",
      choices: ["Lake Inari", "Lake Orivesi", "Lake Bodom"],
      answer: "Lake Bodom" 
   }
];

const question = document.getElementById("question");
const answers = document.getElementById("choices");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
let correctAnswer = 3;

function showQuestion() {
   const quiz = quizArray[currentQuestion];
   question.innerHTML = question.quizArray;

   choices.innerHTML = "";
   question.choices.forEach(option => {
      const button = document.createElement("button");
      button.innerText = choices;
      choices.appendChild(button);
      button.addEventListener("click", selectAnswer);
   })
};

function selectAnswer(e) {
   const selectedbutton = e.target;
   const choices = quiz[currentQuestion].answer;

   if (selectedbutton.innertext === answers) {
      score ++;
   } 

   currentQuestion ++;

   if (currentQuestion < quiz.length) {
      showQuestion();
   } else {
      showResult();
   }
}

function showResult() {
   quiz.innerHTML = `<h3>Congratulations you have completed the quiz</h3>
   <p>You Scored: ${score} / ${quiz.length}</p>`;
}

showQuestion();






   
  

   


