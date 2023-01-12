// let scores = document.querySelector("#scores")
let timer = document.querySelector("#time");
let startButt = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen")
let questionAnswers = document.querySelector("#choices");
let questions = document.querySelector("#questions");
let questionTitel = document.querySelector("#question-title");
// let endScreen = document.querySelector("#end-screen");
// let finalScore = document.querySelector("#final-score");
// let initials = document.querySelector("#initials");
// let submitInitials = document.querySelector("#submit")
// let userFeedback = document.querySelector("#feedback");




let questionsArray = [
    {
        question: "whats the corect way to declare a variable",
        answer: 0,
        choises: [
            "let x = 4",
            "let 4 = x",
            "let const 4 = var",
            "4 = x let",
        ]
    },
    {
        question: "whats the example of a function expresion",
        answer: 0,
        choises: [
            "let x = 4",
            "let 4 = x",
            "let const 4 = var",
            "4 = x let",
        ]
    }
]

// global variables
let timercount = 100;
let scores = 0;
let q = 0;



// button click event to start quiz
startButt.addEventListener("click", () => {
    startQuizz()
})



function startQuizz() {
    // resets all global variables
    timercount = 100;
    scores = 0;
    q = 0;
    startScreen.className = "hide";

    getNextQuestion()
    //timerfunction
    let activetime = setInterval(() => {
        timer.textContent = timercount
        timercount = timercount - 1
        if (timercount <= -1) {
            clearInterval(activetime);

        }
    }, 1000)

}
function getNextQuestion() {
    if (timercount <= 0) {
        console.log("pooooo")
    }
    //reset questions state
    questionAnswers.innerHTML = ""
    questions.className = "start"
    // add question to page
    questionTitel.textContent = questionsArray[q].question
    questionsArray[q].choises.forEach(element => {
    let button = document.createElement("button")
    button.textContent = element
    questionAnswers.appendChild(button)
    });
}








