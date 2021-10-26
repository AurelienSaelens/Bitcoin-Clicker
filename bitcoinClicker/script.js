// general varabiales
let time = 0;

let score = 0;           		// score
let addScoreClick = 1;          // how many add?
let nbUpgradeOne = 0;           // number of upgrade one & how much add each second
let nbUpgradeTwo = 1;
let nbUpgradeThree = 5;

let statusUpgradeTwo = 0;

// elements variables

const clickerImg = document.getElementById("clickercontainer");

const upgradeOne = document.getElementById("btn-autoclicker");
const upgradeTwo = document.getElementById("btn-bonus");
const upgradeThree = document.getElementById("btn-multiplicator");

const spanScore = document.getElementById("score");
const spanUpgradeOne = document.getElementById("autoClickerPrice");
const spanUpgradeTwo = document.getElementById("bonusPrice");
const spanUpgradeTwoTimer = document.getElementById("timer");
const spanUpgradeThird = document.getElementById("multiplierPrice");
const spanUpgradeThirdmulti = document.getElementById("upgrade-3");

// onclick event listener
clickerImg.addEventListener("click", addScore);
upgradeOne.addEventListener("click", upgradeOneFun);
upgradeTwo.addEventListener("click", upgradeTwoFun);
upgradeThree.addEventListener("click", upgradeThreeFunc);


// update dom
function updateDom() {
	spanScore.innerHTML = score;

	spanUpgradeOne.classList.remove("active");
	spanUpgradeTwo.classList.remove("active");
	spanUpgradeThird.classList.remove("active");
	if (score >= 100) {spanUpgradeOne.classList.add("active");}
	if (score >= 300) {spanUpgradeTwo.classList.add("active");}
	if (score >= 2000) {spanUpgradeThird.classList.add("active");}
}

// addscore onclick of the image
function addScore () {
	score += addScoreClick * nbUpgradeTwo;
	updateDom();
}

function reset () {
        score = 0;
        nbUpgradeOne = 0;         
        nbUpgradeTwo = 1;
        nbUpgradeThree = 5;
	time = 29;
	spanUpgradeThirdmulti.innerHTML = nbUpgradeThree;
	addScoreClick = 1;
        updateDom();
}


// upgrade one function
function upgradeOneFun() {
	if (spanUpgradeOne.classList.contains("active")) {
		if (nbUpgradeOne == 0) {
		setInterval(addPointsEverySecond, 1000);
		}
		nbUpgradeOne++;
		score -= 100;
		updateDom();
	}
}
function addPointsEverySecond() {
	score += nbUpgradeOne;
	updateDom();
}

//upgrade two functions
function upgradeTwoFun() {
	if (spanUpgradeTwo.classList.contains("active")) {
	        if (statusUpgradeTwo === 0) {
		        statusUpgradeTwo++;
			score -= 300;
			var timerbonus = setInterval(function () {
				time++;
				spanUpgradeTwoTimer.innerHTML = time;
				nbUpgradeTwo = 2;
				if (time === 30) {
					clearInterval(timerbonus);
					spanUpgradeTwoTimer.innerHTML = "0";
					nbUpgradeTwo = 1;
					time = 0;
					statusUpgradeTwo = 0;
				}
			}, 1000);
			updateDom();
		}
	}
}

//upgrade three function
function upgradeThreeFunc() {
	if (spanUpgradeThird.classList.contains("active")) {
		addScoreClick = nbUpgradeThree;
		nbUpgradeThree++;
		spanUpgradeThirdmulti.innerHTML = nbUpgradeThree;
		score -= 2000;
		updateDom();
	}
}
updateDom();


  
