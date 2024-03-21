let userInputElement = document.getElementById("userInput");
let factElement = document.getElementById("fact");

let spinnerElement = document.getElementById("spinner");

userInputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let number = event.target.value;
        if (number === "") {
            alert("Enter the number");
        }
        spinnerElement.classList.add("d-block")
        let url = "https://apis.ccbp.in/numbers-fact?number=" + number;
        console.log(url);
        let options = {
            method: "GET",

        }

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerElement.classList.remove("d-block");
                factElement.textContent = jsonData.fact;

            })
    }
})