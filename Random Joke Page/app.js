let buttonElement = document.getElementById("jokeBtn");
let jokeElement = document.getElementById("jokeText");

buttonElement.addEventListener("click", function(event) {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            jokeElement.textContent = jsonData.value;
        });
})