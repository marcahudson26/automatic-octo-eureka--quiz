// let scores = document.querySelector("#scores")
let list = document.querySelector("#highscores")
let clear = document.querySelector("#clear")

// sort scores to highest first
function byHighestScore(x, y) {
    if (x.score > y.score) {
        return -1
    }
    if (x.score < y.score) {
        return 1
    }
    return 0
}
// this sorts the array from storage and puts highest score first
let finalScores = JSON.parse(localStorage.getItem("finalScores"))
finalScores.sort(byHighestScore).forEach(element => {

    listName = document.createElement("li")
    listName.textContent = `${element.in} - ${element.score}`

    list.appendChild(listName)
});


// this clears the score if the button is presses
clear.addEventListener("click", (event) => {
    localStorage.clear()
    location.reload();
});



