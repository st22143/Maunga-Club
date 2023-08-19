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



document.addEventListener("DOMContentLoaded", function() {

    var Image1 = document.getElementById("kakapoimage1");
    var Image2 = document.getElementById("kakapoimage2");
    var Image3 = document.getElementById("kakapoimage3");

    let images = [Image1, Image2, Image3];

    if (Image1 && Image2 && Image3) {
        Image1.style.display = "block";
        Image2.style.display = "none";
        Image3.style.display = "none";
        number = 0;

        setInterval(function(){
            
            for(i=0; i<=2; i++) {
                images[i].style.display = "none";
            }
            
            number++;

            images[number].style.display = "block"; 

            if(number>=2) {
                number=-1;
            }}, 
            3000);
        }

});