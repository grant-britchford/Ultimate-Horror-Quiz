document.addEventListener("DOMContentLoaded", function() {
   let buttons= document.getElementsByTagName("button");
   
   for (button of buttons) {
      button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
         alert("You clicked Submit!")
        } else {
         let gameType= this.getAttribute("data-type");
         runGame("quiz");
        }
      })
   }
})

function runGame(gameType) {
   let questions= myQtn.floor(myQtn.random() * 20);
}

function displayQuestion(questions) {
   document.getElementById("myQtn").textContent;
};

let questions= [
   {
      question:"Which serial killer was the inspiration for Thomas Harris' Silence of the Lambs?",
      answers: {
         A:"Ed Gein", 
         B:"Alfredo Balli Trevino", 
         C:"Walter Ellis"
      },
      correctAnswer: "B"
   },
   {
      question:"In 1992 who decapitated his wifes lover and presented her the head?",
      answers: {
         A:"Harold Shipman", 
         B:"Roy Norris", 
         C:"Stephen Schap"
      },
      correctAnswer: "B"
   },
   {
      question:"Who terrorised the Whitechapel district of London in 1888?",
      answers: {
         A:"Springheeled Jack", 
         B:"Albert Fish", 
         C:"Jack the Ripper"
      },
      correctAnswer: "C"
   },
   {
      question:"Which Australian serial killerwas inspired by Chucky the doll of the Childs Play movies?",
      answers: {
         A:"Johnathon Cruz", 
         B:"Martin Bryant", 
         C:"Edmund kemper"
      },
      correctAnswer: "B"
   },
   {
      question:"Which serial killer in the 1970s killed because of a misplaced belief that warped his perception?",
      answers: {
         A:"Herbert Mullin", 
         B:"Brenda Spencer", 
         C:"ted bundy"
      },
      correctAnswer: "A"
   },
   {
      question:"Jerry Brudos murdered womwn because of a fetish for which item?",
      answers: {
         A:"Shoes", 
         B:"Underwear", 
         C:"Dresses"
      }, 
      correctAnswer: "A"
   },
   {
      question:"Tracy Edwards escaped which serial killer which then led to his arrest?",
      answers: {
         A:"Ted Bundy", 
         B:"Jeffery Dahmer", 
         C:"Ed Gein"
      }, 
      correctAnswer: "B"
   },
   {
      question:"Mark Branch was inspired by which movie killer?",
      answers: {
         A:"Freddy Krueger", 
         B:"Michael Myers", 
         C:"Jason Vorhees"
      },
      correctAnswer: "C"  
   },
   {
      question:"The Canadian serial killer Gilbert Paul Jordan was also known as which name?",
      answers: {
         A:"Boozing Barber", 
         B:"Sweeney Todd", 
         C:"The butcher of Lyons"
      },
      correctAnswer: "A"
   },
   {
      question:"Who was the Toy Box killer?",
      answers: {
         A:"Nicolas Claux", 
         B:"Charlie Brandt", 
         C:"David Parker Ray"
      },
      correctAnswer: "C"  
   },
   {
      question:"The angel of death Josef Mengele died in which year?",
      answers: {
         A:"1959", 
         B:"1979", 
         C:"1949"
      },
      correctAnswer: "B"
   },
   {
      question:"Dennis Rader aka the B.T.K killer worked as what type of technician?",
      answers: {
         A:"Computer technician", 
         B:"Laboratory technician", 
         C:"Alarm technician"
      },
      correctAnswer: "C"  
   },
   {
      question:"Gary Ridgway a.k.a The Green River killer served in which military branch?",
      answers: {
         A:"Airforce", 
         B:"navy", 
         C:"Army"
      },
      correctAnswer: "B"
   },
   {
      question:"Tsutomu Miyazaki blamed who for commanding him to kill?",
      answers: {
         A:"The Rat man", 
         B:"The Dog man", 
         C:"The Cat man"
      },
      correctAnswer: "A"
   },
   {
      question:"Which country has the second most number of serial killers?",
      answers: {
         A:"Iceland", 
         B:"The Philippines", 
         C:"The United States"
      },
      correctAnswer: "B"
   },
   {
      question:"Norman bates of Psycho was based on which serial killer who had an obessive bond with his mother?",
      answers: {
         A:"Ted Bundy", 
         B:"Ed Gein", 
         C:"Peter Sutcliffe"
      },
      correctAnswer: "B"
   },
   {
      question:"Richard Delmer Boyer copied which horroe movie for his 1982 murders?",
      answers: {
         A:"The texas chainsaw massacre", 
         B:" Halloween 2", 
         C:"Last house on the left"
      },
      correctAnswer: "B"
   },
   {
      question:"Dana Sue Gray gave what reason for her 1994 murder spree?",
      answers: {
         A:"Retail therapy", 
         B:"Voices in her head", 
         C:"The excitement"
      },
      correctAnswer: "A"
   },
   {
      question:"Daniel LaPlante stalked the family he murdered by living in...?",
      answers: {
         A:"...Basement", 
         B:"...Walls", 
         C:"...Attic"
      },
      correctAnswer: "B"
   },
   {
      question:"Which unsolved case still haunts Finland?",
      answers: {
         A:"Lake Inari", 
         B:"Lake Orivesi", 
         C:"Lake Bodom"
      },
      correctAnswer: "C"  
   }
];
console.log(questions);

   
  

   


