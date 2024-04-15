var number = 0;
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");
const minus = document.querySelector(".minus");
const nummer = document.getElementById("number");

plus.addEventListener("click", function() {
    number = number + 1;
    nummer.innerHTML = number;
});

reset.addEventListener("click", function() {
    number = 0;
    nummer.innerHTML = number;
});

minus.addEventListener("click", function() {
    number = number - 1;
    nummer.innerHTML = number;
});

if(number > 0) {
    nummer.style.color = "green";
};

if(number < 0) {
    nummer.style.color = "red";
};
