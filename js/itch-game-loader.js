(function(){
    var snakeButton = document.getElementById("snake-load-button");
    var gamePreloadContainer = document.getElementById("game-preload-container");
    var snakeIFrame = document.getElementById("snake-iframe");
    var snakeIFrameContainer = document.getElementById("snake-iframe-container");

    function snakeButtonClick() {
        snakeIFrame.src = "https://itch.io/embed-upload/1083437?color=333333";
        snakeIFrameContainer.style.display = "block";
        gamePreloadContainer.style.display = "none";
    }

    //snakeButton.addEventListener("click", snakeButtonClick);
})();
