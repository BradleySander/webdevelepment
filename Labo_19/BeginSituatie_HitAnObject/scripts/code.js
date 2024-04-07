const global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 5000,
    score: 0,
    timeoutId: 0,
    gameInProgress: false
};

const setup = () => {
    document.getElementById("startButton").addEventListener("click", startGame);
    document.getElementById("target").addEventListener("click", clicked);
};

const startGame = () => {
    global.score = 0;
    document.getElementById("score").innerText = "Score: 0";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("target").style.display = "block";
    global.gameInProgress = true;
    changeImage();
};

const changeImage = () => {
    if (!global.gameInProgress) return;
    const randomNumber = Math.floor(Math.random() * global.IMAGE_COUNT);
    const imageName = randomNumber + global.IMAGE_PATH_SUFFIX;
    const target = document.getElementById("target");
    const maxX = document.getElementById("playField").offsetWidth - global.IMAGE_SIZE;
    const maxY = document.getElementById("playField").offsetHeight - global.IMAGE_SIZE;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    target.style.left = newX + "px";
    target.style.top = newY + "px";
    target.src = global.IMAGE_PATH_PREFIX + imageName;
    target.setAttribute("data-image", randomNumber.toString());
    target.style.display = "block";
    global.timeoutId = setTimeout(changeImage, global.MOVE_DELAY);
};

const clicked = () => {
    if (!global.gameInProgress) return;
    const target = document.getElementById("target");
    clearTimeout(global.timeoutId);
    if (target.src.endsWith("0.png")) {
        endGame();
    } else {
        const currentImage = parseInt(target.getAttribute("data-image"));
        target.style.display = "none";
        global.score++;
        document.getElementById("score").innerText = "Score: " + global.score;
        changeImage();
    }
};

const endGame = () => {
    alert("Game Over! Your score: " + global.score);
    global.gameInProgress = false;
    global.score = 0;
    document.getElementById("startButton").style.display = "block";
};

window.addEventListener("load", setup);