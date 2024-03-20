let url = "https://apis.ccbp.in/random-quote";

let options = {
    method: "GET"
}
fetch(url, options)
    .then(function(response) {
        return response.json()
    })
    .then(function(jsonData) {
        quoteDisplayEl.textContent = jsonData.content;
    })


let timerElement = document.getElementById("timer");

let intervalId = setInterval(function() {
    let timerElementValue = parseInt(timerElement.textContent);
    timerElementValue += 1;
    timerElement.textContent = timerElementValue;

}, 1000);
let quoteDisplayEl = document.getElementById("quoteDisplay");

let inputElement = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resultEl = document.getElementById("result");

submitBtn.addEventListener("click", function(event) {
    let inputElementValue = inputElement.value;
    console.log(inputElementValue);
    console.log(quoteDisplayEl.textContent);
    if (inputElementValue === quoteDisplayEl.textContent) {
        clearInterval(intervalId);
        resultEl.textContent = "You finished in " + timerElement.textContent + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }

})

resetBtn.addEventListener("click", function(event) {
    let spinnerEl = document.getElementById("loadingSpinner");
    spinnerEl.classList.remove("d-none");
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.textContent = jsonData.content;
        })
    timerElement.textContent = "0";


})