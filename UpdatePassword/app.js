let formEl = document.getElementById("updatePasswordForm");

let inputNewPasswordEl = document.getElementById("newPassword");
let inputNewPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");



let inputConfirmPasswordEl = document.getElementById("confirmPassword");
let inputConfirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

inputNewPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        inputNewPasswordErrMsgEl.textContent = "Required*";
    } else {
        inputNewPasswordErrMsgEl.textContent = "";
    }
})

inputConfirmPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === " ") {
        inputConfirmPasswordErrMsgEl.textContent = "Password must be same";
    } else {
        inputConfirmPasswordErrMsgEl.textContent = "";
    }
})



formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (inputNewPasswordEl.textContent === "") {
        inputNewPasswordErrMsgEl.textContent = "Required*";
    } else {
        inputNewPasswordErrMsgEl.textContent = "";
    }

    if (inputConfirmPasswordEl.textContent === "") {
        inputConfirmPasswordErrMsgEl.textContent = "Required*";
    } else {
        inputConfirmPasswordErrMsgEl.textContent = "";
    }

    if (inputNewPasswordEl.value !== inputConfirmPasswordEl.value) {
        inputConfirmPasswordErrMsgEl.textContent = "Passwords must be same"
    } else {
        inputConfirmPasswordErrMsgEl.textContent = "";
    }

})