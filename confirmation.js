const params = new URLSearchParams(document.location.search);
const nameParam = params.get("name");
const emailParam = params.get("email");
const areasParam = params.get("areas-selected");

document.getElementById("name").innerHTML = nameParam;
document.getElementById("email").innerHTML = emailParam;
document.getElementById("areas").innerHTML = areasParam;
