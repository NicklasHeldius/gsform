const form = document.getElementById("form");
const addAreaButton = document.getElementById("add-area");
const areaList = document.getElementById("area-list");
const areasSelected = document.getElementById("areas-selected");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const areas = [];

addAreaButton.addEventListener("click", function () {
    let areaName = document.getElementById("areaName").value;

    if (areaName.length > 0 && !areas.includes(areaName)) {
        areas.push(areaName);
    }

    updateAreaList();
});

function removeArea(index) {
    areas.splice(index, 1);
    updateAreaList();
}

function updateAreaList() {
    areaList.innerHTML = "";

    areas.forEach((area, index) => {
        areaList.innerHTML +=
            "<div class='area'><span>" +
            area +
            "</span><button onClick='removeArea(" +
            index +
            ")' class='remove-area'></button></div>";
    });

    areasSelected.value = areas;
}

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let errorMessage;
    let validationFailed = false;

    errorMessage = document.querySelector(".name .error-message");

    if (nameInput.value == "") {
        errorMessage.classList.add("visible");
        validationFailed = true;
    } else {
        errorMessage.classList.remove("visible");
    }

    errorMessage = document.querySelector(".email .error-message");

    if (emailInput.value == "") {
        errorMessage.classList.add("visible");
        validationFailed = true;
    } else {
        errorMessage.classList.remove("visible");
    }

    errorMessage = document.querySelector(".areas .error-message");

    if (!areas.length > 0) {
        errorMessage.classList.add("visible");
        validationFailed = true;
    } else {
        errorMessage.classList.remove("visible");
    }

    if (!validationFailed) {
        form.submit();
    }
}
