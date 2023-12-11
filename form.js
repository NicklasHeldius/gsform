const addAreaButton = document.getElementById("add-area");
const areaList = document.getElementById("area-list");
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
}

const form = document.getElementById("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");

    let validationFailed = false;

    if (nameInput.value == "") {
        let errorMessage = document.querySelector(".name .error-message");
        errorMessage.classList.add("visible");
        validationFailed = true;
    } else {
        let errorMessage = document.querySelector(".name .error-message");
        errorMessage.classList.remove("visible");
    }

    if (emailInput.value == "") {
        let errorMessage = document.querySelector(".email .error-message");
        errorMessage.classList.add("visible");
        validationFailed = true;
    } else {
        let errorMessage = document.querySelector(".email .error-message");
        errorMessage.classList.remove("visible");
    }

    if (!areas.length > 0) {
        let errorMessage = document.querySelector(".areas .error-message");
        errorMessage.classList.add("visible");
        validationFailed = true;
    } else {
        let errorMessage = document.querySelector(".areas .error-message");
        errorMessage.classList.remove("visible");
    }

    if (validationFailed) {
        return false;
    } else {
        let nameConfirm = document.querySelector(".name-confirm");
        let emailConfirm = document.querySelector(".email-confirm");
        let areasConfirm = document.querySelector(".areas-confirm");

        nameConfirm.innerHTML = nameInput.value;
        emailConfirm.innerHTML = emailInput.value;

        areas.forEach((area) => {
            areasConfirm.innerHTML += "<div>" + area + "</div>";
        });

        overlay.classList.add("visible");
        modal.classList.add("visible");
    }
}

function closeModal() {
    overlay.classList.remove("visible");
    modal.classList.remove("visible");
}