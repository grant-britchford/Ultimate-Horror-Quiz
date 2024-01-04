// high scores table
let table= document.createElement("table");

let headerRow= document.createElement("tr");
let nameHeader= document.createElement("th");
nameHeader.textContent= "Name";
let scoreHeader= document.createElement("th");
scoreHeader.textContent= "Score";
headerRow.appendChild(nameHeader);
headerRow.appendChild(scoreHeader);
table.appendChild(headerRow);

for (let i=0; i<highScores.length; i++) {
    let nameCell= document.createElement("tr");
    nameCell.textContent= highScores[i].name;
    let scoreCell= document.createElement("td");
    scoreCell.textContent= highScores[i].score;
    row.appendChild(nameCell);
    row.apeendChild(scoreCell);
    table.appendChild(row);
}

document.body.appendChild(table);