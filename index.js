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
            "function startQuizz()",
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
    },
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
    timercount = 10;
    scores = 0;
    q = 0;
    startScreen.className = "hide";
    localStorage.getItem("finalScores")
    if (!localStorage.getItem("finalScores")) {
        localStorage.setItem("finalScores", JSON.stringify([]))
    }

    getNextQuestion()
    //timerfunction
    let activetime = setInterval(() => {
        timer.textContent = timercount
        if (timercount <= 0) {
            
            clearInterval(activetime);
            endQuiz()
            
        }
        timercount = timercount - 1
    }, 1000)

}
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

            if (Number(event.target.dataset.indexNumber) === questionsArray[q].answer) {
                scores += 5
                userFeedback.classList.remove("hide")
                userFeedback.textContent = "correct"
                successSound.currentTime = 0
                successSound.play()

                
            } else {
                timercount -= 10
                userFeedback.classList.remove("hide")
                userFeedback.textContent = "Wrong"
                failSound.currentTime = 0
                failSound.play()
            }

            setTimeout(()=>{
                userFeedback.classList.add("hide")
            }, 1000)
            //next question
            q = q + 1

            getNextQuestion()
        })
        questionAnswers.appendChild(button)

    });
}

function endQuiz() {
    questions.className = "hide"
    endScreen.className = "start"
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





