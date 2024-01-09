/* high score table input */
const username= document.getElementById('username');
const saveScoreBtn= document.getElementById('saveScoreBtn');
const finalScore= document.getElementById('finalScore');

const highScores= JSON.parse(localStorage.getItem('highScores')) || [];

const max_high_scores= 15;

finalScore.innerText= mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled= !username.value;
});

saveHighScore= (e) => {
    e.preventDefault();

    const score= {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(15);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/')
};