/* 1. formatting (high score, current score, startgame button, timer,
 "what is the answer?, operation div,4 answer buttons")

 1.5 declare variables (timeleft, timerInterval, score, correctAnswer, highScore)

2. startGame()
    next question()
    disable start button
    var timeDisplay
        timeDisplay.hidden = false;
    timerInterval = setInterval
     decremenet time
     set innerHTML
     if timeleft == 0 
     clearinterval(this)
    disable buttons , 1000

3. nextQuestion() Math

4. checkAnswer()
    localStorage

*/

let timeLeft = 10;
let timerInterval;
let score = 0;
let correctAnswer;
let highScore = 0;

window.onload = function () {
    let scoreFromBrowser = localStorage.getItem("high-score");
    if (scoreFromBrowser !=undefined) {highScore = scoreFromBrowser}
    document.getElementById("high-score").innerHTML= "High Score: " + highScore

}

function startGame() {

    nextQuestion();
    document.getElementById("start-btn").disabled = true;
    let timeDisplay = document.getElementById("time-display")
    timeDisplay.hidden = false;
    timerInterval = setInterval(function() {
        timeLeft--

        timeDisplay.innerHTML = "Time Left: " + timeLeft
        if (timeLeft == 0) {
            clearInterval(timerInterval);
            document.getElementById("btn1").disabled = true
            document.getElementById("btn2").disabled = true
            document.getElementById("btn3").disabled = true
            document.getElementById("btn4").disabled = true
        }
    }, 1000)
}

function nextQuestion() {
    let operationDiv = document.getElementById("operation")
    let firstNum = Math.ceil(Math.random() * 12)
    let secondNum = Math.ceil(Math.random() * 12)
    correctAnswer = firstNum * secondNum
    operationDiv.innerHTML = firstNum + "*" + secondNum

    //set button to have random answers and one should be correct answer

    let wrongAnswer1 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12)
    let wrongAnswer2 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12)
    let wrongAnswer3 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12)
    let wrongAnswer4 = Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12)


    document.getElementById("btn1").innerHTML = wrongAnswer1
    document.getElementById("btn2").innerHTML = wrongAnswer2
    document.getElementById("btn3").innerHTML = wrongAnswer3
    document.getElementById("btn4").innerHTML = wrongAnswer4



    let correctAnswerIndex = Math.floor(Math.random()*4 +1); //1234
    let correctAnswerID = "btn" + correctAnswerIndex
    document.getElementById(correctAnswerID).innerHTML = correctAnswer;
}

function checkAnswer(buttonIndex) {
    let answer = document.getElementById("btn" + buttonIndex).innerHTML;
    if (answer == correctAnswer) score++;
    document.getElementById("current-score").innerHTML= "Current Score: " + score
    if (score > highScore) {highScore = score}
    localStorage.setItem("high-score", highScore)
    document.getElementById("high-score").innerHTML= "High Score: " + highScore

    nextQuestion();
}