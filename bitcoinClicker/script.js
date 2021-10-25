let score = 0;
let addPower = 0;

function addToscore(n, addPower) {
    if (addPower == 0) {
        score = parseInt(score) + 1;
        document.getElementById('score').innerHTML = score;
    }
}