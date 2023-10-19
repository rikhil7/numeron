// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
let play_btn = document.getElementById("play-button");
console.log(play_btn)

play_btn.addEventListener("click", redirect)

function redirect(){
    location.href = "./game.html"
}