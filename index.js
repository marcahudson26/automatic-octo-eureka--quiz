// let scores = document.querySelector("#scores")
let timer = document.querySelector("#time");
let startButt = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen")
let questionAnswers = document.querySelector("#choices");
let questions = document.querySelector("#questions");
let questionTitel = document.querySelector("#question-title");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let initials = document.querySelector("#initials");
let submitInitials = document.querySelector("#submit")
let userFeedback = document.querySelector("#feedback");
let failSound = new Audio("./assets/sfx/incorrect.wav")
let successSound = new Audio("./assets/sfx/correct.wav")



// array of objects
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
        answer: 1,
        choises: [
            "quiz const = function(answer, question)",
            "const getRectArea = function(width, height)",
            "function startQuiz()",
            "const; getRectArea = function(width, height)",
        ]
    },
    {
        question: "What is 30/3?",
        answer: 2,
        choises: [
            "NaN",
            "33",
            "10",
            "27",
        ]
    }, {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: 0,
        choises: [
            "<script>",
            "<js>",
            "<scripting>",
            "<javascript>",
        ]
    }, {
        question: "How do you write 'Hello World' in an alert box??",
        answer: 3,
        choises: [
            "msgBox('Hello World')",
            "msg('Hello World')",
            "alertBox('Hello World')",
            "alert('Hello World')",
        ]
    }, {
        question: "How do you create a function in JavaScript??",
        answer: 2,
        choises: [
            "myfunction() = function",
            "function myfunction,()",
            "function myfunction()",
            "function = myfinction()",
        ]
    }, {
        question: "How do you call a function named 'myFunction'?",
        answer: 3,
        choises: [
            "(myFunction)",
            "()myFunction",
            "call myFunction()",
            "myFunction()",
        ]
    }, {
        question: "How to write an IF statement in JavaScript?",
        answer: 2,
        choises: [
            "if i == 6 then",
            "if i == 10",
            "if (i == 5)",
            "if i = 15 then",
        ]
    }, {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answer: 0,
        choises: [
            "if(i != 5)",
            "if i <> 5",
            "if i == 5 then",
            "(i != 5 ) if",
        ]
    }, {
        question: "What is the correct way to write a JavaScript array?",
        answer: 2,
        choises: [
            "let colors = 1 = ('red'), 2 = ('green'), 3= ('blue')]",
            "let colors = ('red'), ('green',) ('blue')]",
            "let colors = ['red', 'green', 'blue']",
            "['red', 'green', 'blue'] = let colors ",
        ]
    },
]

// global variables
let timercount = 100;
let scores = 0;
let q = 0;



// button click event to start quiz
startButt.addEventListener("click", () => {
    startQuiz()
})


// function to start the quiz
function startQuiz() {
    // resets all global variables
    timercount = 100;
    scores = 0;
    q = 0;
    startScreen.className = "hide";
    localStorage.getItem("finalScores")
    if (!localStorage.getItem("finalScores")) {
        localStorage.setItem("finalScores", JSON.stringify([]))
    }

    getNextQuestion()
    //timer function
    let activetime = setInterval(() => {
        timer.textContent = timercount
        if (timercount <= 0) {

            clearInterval(activetime);
            endQuiz()

        }
        timercount = timercount - 1
    }, 1000)

}

// this function gets the the nex question
function getNextQuestion() {
    if (questionsArray[q] === undefined) {
        endQuiz()
        return
    }
    if (timercount <= 0) {

        return
    }
    //reset questions state
    questionAnswers.innerHTML = ""
    questions.className = "start"
    // add question to page
    questionTitel.textContent = questionsArray[q].question

    questionsArray[q].choises.forEach((element, i) => {
        let button = document.createElement("button")
        button.textContent = element
        button.dataset.indexNumber = i
        button.addEventListener("click", (event) => {
            //check answer

            // this checks if the answer is correct and totals up the scores
            // this also gives user feedback and sound
            if (Number(event.target.dataset.indexNumber) === questionsArray[q].answer) {
                scores += 10
                userFeedback.classList.remove("hide")
                userFeedback.textContent = "correct"
                successSound.currentTime = 0
                successSound.play()

                // this checks if the answer is incorrect and take time odd of timer
                // this also gives user feedback and sound
            } else {
                timercount -= 10
                userFeedback.classList.remove("hide")
                userFeedback.textContent = "Wrong"
                failSound.currentTime = 0
                failSound.play()
            }
            // this times how long user feedback stays no the screen
            setTimeout(() => {
                userFeedback.classList.add("hide")
            }, 1000)
            //next question
            q = q + 1

            getNextQuestion()
        })
        questionAnswers.appendChild(button)

    });
}
// this function ends the quiz and puts scores in local storage
function endQuiz() {
    questions.className = "hide"
    endScreen.className = "start"
    timer.className = "hide"
    finalScore.textContent = scores
    submitInitials.addEventListener("click", (event) => {
        let finalScores = JSON.parse(localStorage.getItem("finalScores"))
        let currentScore = {
            in: initials.value,
            score: scores
        }
        finalScores.push(currentScore)
        localStorage.setItem("finalScores", JSON.stringify(finalScores))
        window.location = "./highscores.html"
    })
}





