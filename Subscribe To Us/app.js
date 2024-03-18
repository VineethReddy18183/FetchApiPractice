let inputNameEl = document.getElementById("name");

let inputEmailEl = document.getElementById("email");

let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailErrMsgEl = document.getElementById("emailErrMsg");

let formEl = document.getElementById("subscribeForm");
formEl.addEventListener("submit", function(event) {
    event.preventDefault();
})

inputNameEl.addEventListener("blur", function(event) {

    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
})

inputEmailEl.addEventListener("blur", function(event) {

    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
})