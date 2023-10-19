// Iteration 5: Store the player score and display it on the game over screen
let score_box = document.getElementById("score-board")
console.log(score_box)
let value = localStorage.getItem("score")
let play_again = document.getElementById("play-again-button")
play_again.addEventListener("click", reset)
function reset(){
    window.open("./game.html","_self")
}
score_box.textContent = value