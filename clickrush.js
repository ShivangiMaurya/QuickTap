
let score = 0;
let timeLeft = 30;
let gameInterval;
let countdown;

function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById("score").innerText = score;
    document.getElementById("timer").innerText = timeLeft;
    document.getElementById("game-container").innerHTML = "";
    
    gameInterval = setInterval(spawnTarget, 800);
    countdown = setInterval(updateTimer, 1000);
}

function spawnTarget() {
    let gameContainer = document.getElementById("game-container");
    let target = document.createElement("div");
    target.classList.add("target");
    target.style.top = Math.random() * 250 + "px";
    target.style.left = Math.random() * 250 + "px";
    
    target.onclick = function () {
        score++;
        document.getElementById("score").innerText = score;
        target.remove();
    };

    gameContainer.appendChild(target);
    setTimeout(() => target.remove(), 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(countdown);
        alert("Time's up! Your final score: " + score);
    }
}

