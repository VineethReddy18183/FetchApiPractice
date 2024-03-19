
let object = {
    siteName: "",
    siteUrl: ""
}

let listContainerEl = document.getElementById("bookmarksList");

let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");

let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

let submitBtn = document.getElementById("submitBtn");


siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required field*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
})

siteUrlInputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required field*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
})

let createAndAddItem = function(object) {
    if (object.siteName !== "" && object.siteUrl !== "") {
        let listItemContainer = document.createElement("div");
        listItemContainer.classList.add("list-item-container");

        let listItemName = document.createElement("p");
        listItemName.textContent = object.siteName;

        listItemContainer.appendChild(listItemName);

        let listItemUrl = document.createElement("a")

        listItemUrl.setAttribute("href", object.siteUrl);
        listItemUrl.setAttribute("target", "_blank");

        listItemUrl.textContent = object.siteUrl;

        listItemContainer.appendChild(listItemUrl);

        listContainerEl.appendChild(listItemContainer)
    }
}



let formEl = document.getElementById("bookmarkForm");
formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    object.siteName = siteNameInputEl.value;
    object.siteUrl = siteUrlInputEl.value;
    createAndAddItem(object);



})