let inputNameEl = document.getElementById("name");
let inputNameErrMsg = document.getElementById("nameErrMsg");

let inputEmailEl = document.getElementById("email");
let inputEmailErrMsg = document.getElementById("emailErrMsg");


inputNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        inputNameErrMsg.textContent = "Required*";

    } else {
        inputNameErrMsg.textContent = "";
    }
})

inputEmailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        inputEmailErrMsg.textContent = "Required*";
    } else {
        inputEmailErrMsg.textContent = "";
    }
})