/* high score table input */
const highScoresList = document.getElementById("highScoresList");
const highScores = json.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores

.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})

.join("");