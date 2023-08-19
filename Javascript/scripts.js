function cabin_popup() {
    document.getElementById("cabinframe").style.backgroundColor = "rgba(25, 25, 25, 0.518)";
}

function information_popup() {
    document.getElementById("informationframe").style.backgroundColor = "rgba(25, 25, 25, 0.518)";
}

function skiing_popup() {
    document.getElementById("skiingframe").style.backgroundColor = "rgba(25, 25, 25, 0.518)";
}

function undo_cabin() {
    document.getElementById("cabinframe").style.backgroundColor = "";
}

function undo_information() {
    document.getElementById("informationframe").style.backgroundColor = "";
}

function undo_skiing() {
    document.getElementById("skiingframe").style.backgroundColor = "";
}

function openkakapo() {
    document.getElementById("kakapotab").style.display = "block";
    document.getElementById("pukekotab").style.display = "none";
    document.getElementById("kerurutab").style.display = "none";
}

function openpukeko() {
    document.getElementById("kakapotab").style.display = "none";
    document.getElementById("pukekotab").style.display = "block";
    document.getElementById("kerurutab").style.display = "none";
}

function openkereru() {
    document.getElementById("kakapotab").style.display = "none";
    document.getElementById("pukekotab").style.display = "none";
    document.getElementById("kerurutab").style.display = "block";
}


