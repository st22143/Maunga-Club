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
    document.getElementById("infotitle").textContent = "Kakapo";
    document.getElementById("infodetails").textContent = "Adults: 30"
}

function openpukeko() {
    document.getElementById("kakapotab").style.display = "none";
    document.getElementById("pukekotab").style.display = "block";
    document.getElementById("kerurutab").style.display = "none";
    document.getElementById("infotitle").textContent = "Pukeko";
    document.getElementById("infodetails").textContent = "Adults: 10"
}

function openkereru() {
    document.getElementById("kakapotab").style.display = "none";
    document.getElementById("pukekotab").style.display = "none";
    document.getElementById("kerurutab").style.display = "block";
    document.getElementById("infotitle").textContent = "Keruru";
    document.getElementById("infodetails").textContent = "Adults: 2"
}




document.addEventListener("DOMContentLoaded", function() { //Checks calls the following code if the website is loaded

    function switchImages(images) {
        let number = 0;

        images[number].style.display = "block";
        images.forEach((image, index) => {
            if (index !== number) {
                image.style.display = "none";
            }
        });

        setInterval(function() {
            images[number].style.display = "none";

           

            number++;

            if (number >= images.length) {
                number = 0;
            }

            images[number].style.display = "block";
        }, 3000);
    }

    var kakapoimages = [
        document.getElementById("kakapoimage1"),
        document.getElementById("kakapoimage2"),
        document.getElementById("kakapoimage3")
    ];

    var pukekoimages = [
        document.getElementById("pukekoimage1"),
        document.getElementById("pukekoimage2"),
        document.getElementById("pukekoimage3")
    ];

    var keruruimages = [
        document.getElementById("keruruimage1"),
        document.getElementById("keruruimage2"),
        document.getElementById("keruruimage3")
    ];

    if (kakapoimages.every(image => image != null)) {  //The functions will only be called if the lists are valid
        switchImages(kakapoimages);
    }
    
    if (pukekoimages.every(image => image != null)) {
        switchImages(pukekoimages);
    }
    
    
    if (keruruimages.every(image => image != null)) {
        switchImages(keruruimages);
    }

}); 

function pop_up(){
    document.getElementById("details").style.display = "block";
}

function testing(){
    document.getElementById("details").style.display = "none";
}