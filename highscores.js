let list = document.querySelector("#highscores")
let clear = document.querySelector("#clear")

let finalScores = JSON.parse(localStorage.getItem("finalScores"))
finalScores.forEach(element => {
    listName = document.createElement("li")
    listName.textContent = element.in+" -- "+ element.score
    list.appendChild(listName)
});
 
clear.addEventListener("click", (event) => {
    localStorage.clear()
    location.reload();
})