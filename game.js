// Iteration 2: Generate 2 random number and display it on the screen

var num1
var num2

let num1_box = document.getElementById("number1")
let num2_box = document.getElementById("number2")

generateRandomNumber()
function generateRandomNumber(){
    num1 = Math.floor(Math.random()*100)
    num2 = Math.floor(Math.random()*100)
    
    num1_box.textContent = num1
    num2_box.textContent = num2
}


// Iteration 3: Make the options button functional

let score = 0

let greater_than = document.getElementById("greater-than")
let equal_to = document.getElementById("equal-to")
let lesser_than = document.getElementById("lesser-than")

greater_than.onclick = () => {
    if(num1>num2){
        correctans()
    }
    else{
        window.open("./gameover.html","_self")
    }
}


lesser_than.onclick = () => {
    if(num1<num2){
        correctans()
    }
    else{
        window.open("./gameover.html","_self")
    }
}
equal_to.onclick = () => {
    if(num1==num2){
        correctans()
    }
    else{
        window.open("./gameover.html","_self")
    }
}



// Iteration 4: Build a timer for the game
let interval
let time
let timer_box = document.getElementById("timer");
// console.log(timer_box)
function timerStart(){
    time = 3
    
    interval = setInterval(() => {
        timer_box.textContent = time
        time--
        
        if (time==0){
            clearInterval(interval)
            window.open("./gameover.html","_self")
        }
    }, 1000);
}
function correctans(){
        score++
        generateRandomNumber()
        localStorage.setItem("score", score)
        clearInterval(interval)
        timerStart()
}
timerStart()
localStorage.setItem("score", 0)