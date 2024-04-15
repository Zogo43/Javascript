const colors = ["red", "blue", "green", "yellow", "#596f62"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * 5);
}