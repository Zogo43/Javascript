let counter = 0;
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");
const minus = document.querySelector(".minus");
const number = document.getElementById("number");

plus.addEventListener("click", function() {
    counter++ ;
    number.innerHTML = counter;
    getColor();
});

reset.addEventListener("click", function() {
    counter = 0;
    number.innerHTML = counter;
    getColor();
});

minus.addEventListener("click", function() {
    counter-- ;
    number.innerHTML = counter;
    getColor();
});

function getColor() {
    if(counter > 0) {
        number.style.color = "green";
    };
    
    if(counter < 0) {
        number.style.color = "red";
    };

    if(counter == 0) {
        number.style.color = "black";
    };
};