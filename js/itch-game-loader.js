var snakeButton = document.getElementById("snake-load-button");
var snakeIFrame = document.getElementById("snake-iframe");

function snakeButtonClick() {
    snakeIFrame.src = "https://itch.io/embed-upload/1076066?color=333333";
    snakeButton.style.display = "none";
}

snakeButton.addEventListener("click", snakeButtonClick);
