let score = 0;
let addPower = 0;
let bonus = 0;

score = document.getElementById('score').innerHTML;
function addcoins(n, addPower, bonus) {
    if ((addPower == 0 && bonus == 0) && (addPower == 0 || bonus == 0)) {
        score = parseInt(score) + n;
    document.getElementById('score').innerHTML = score;
    }
}