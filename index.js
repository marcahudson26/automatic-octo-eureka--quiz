let scores = document.querySelector("#scores")
let timer = document.querySelector("#time");
let startButt = document.querySelector("#start");
let questionsAnswer = document.querySelector("#choices");
let questions = document.querySelector("#questions");
let questionTitel = document.querySelector("#question-title");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let initials = document.querySelector("#initials");
let submitInitials = document.querySelector("#submit")
let userFeedback = document.querySelector("#feedback");

// global variables
timercount = 100;
score = 0;
q = 0;



//timerfunction

let activetime = setInterval(() => {
    timer.textContent = timercount
    timercount = timercount - 1
    if ( timercount <= -1 ) {
        clearInterval(activetime);
        alert("done")
    }
}, 1000)