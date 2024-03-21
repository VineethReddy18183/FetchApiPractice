let requestBodyEl = document.getElementById("requestBody");
let buttonElement = document.getElementById("sendPostRequestBtn");

let requestStatusEl = document.getElementById("requestStatus");
let responseBodyEl = document.getElementById("httpResponse");

buttonElement.addEventListener("click", function(event) {
    let requestBodyValue = requestBodyEl.value;
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 0924d2f12bacf156c7f621a7493eef78b3244b0b339db570915a6e5a012253dc"

        },
        body: JSON.stringify(requestBodyValue)
    };

    fetch(url, options)
        .then(function(response) {

            return response.json();

        })
        .then(function(jsonData) {
            requestStatusEl.textContent = jsonData.code;
            responseBodyEl.textContent = JSON.stringify(jsonData);

        })

})