/* high score table */
var highscoreList= [{score:1 name: highscoreLine[]},
    {score:2 name: highscoreLine[]},
    { score:3 name: highscoreLine[]},
    { score:4 name: highscoreLine[] },
    { score:5 name: highscoreLine[] },
];
highscoreList.sort(function){
    return score
}

var table= document.createElement('table');
var header= table.createTHead();
var row= header.insertRow(0);
var cell1= row.insertCell(0);
var cell2= row.insertCell(1);
cell1.innerHTML= '<b>Name</b>';
cell2.innerHTML= '<b>Score</b>';
for (var i=0; i<highscoreList.length; i++){
    var row= table.insertRow(i+1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    cell1.innerHTML= highscoreList[i].Name;
    cell2.innerHTML= highscoreList[i].Score;
}
document.body.appendChild(table);