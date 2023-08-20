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
    document.getElementById("info").textContent = "Kakapo";
}

function openpukeko() {
    document.getElementById("kakapotab").style.display = "none";
    document.getElementById("pukekotab").style.display = "block";
    document.getElementById("kerurutab").style.display = "none";
    document.getElementById("info").textContent = "Pukeko";
}

function openkereru() {
    document.getElementById("kakapotab").style.display = "none";
    document.getElementById("pukekotab").style.display = "none";
    document.getElementById("kerurutab").style.display = "block";
    document.getElementById("info").textContent = "Keruru";
}



/*document.addEventListener("DOMContentLoaded", function() { //Checks calls the following code if the website is loaded

    var kakapoimage1 = document.getElementById("kakapoimage1"); //Creating variables to make my life easier
    var kakapoimage2 = document.getElementById("kakapoimage2");
    var kakapoimage3 = document.getElementById("kakapoimage3");

    let kakapoimages = [kakapoimage1, kakapoimage2, kakapoimage3];

    if (kakapoimages[0], kakapoimages[1], kakapoimages[2]) { //The following code will only be called if these variables exist
        kakapoimages[0].style.display = "block"; //One image will be displayed
        kakapoimages[1].style.display = "none";
        kakapoimages[2].style.display = "none";
        number = 0; 

        setInterval(function(){  //The following code will be called every 300 milliseconds (3 seconds)
            
            for(i=0; i<=2; i++) { //For loop for javascript
                kakapoimages[i].style.display = "none"; //Makes all images display nothing.
            }
            
            
            console.log(number);
            
            if(number<=2) {
                kakapoimages[number].style.display = "block"; //One image will be displayed
            }
            
            number++;
            
            if(number>=3) {
                number=0;
            }
            

        }, 3000); 
    }
    
    var pukekoimage1 = document.getElementById("pukekoimage1"); //Creating variables to make my life easier
    var pukekoimage2 = document.getElementById("pukekoimage2");
    var pukekoimage3 = document.getElementById("pukekoimage3");

    let pukekoimages = [pukekoimage1, pukekoimage2, pukekoimage3];

    if (pukekoimages[0], pukekoimages[1], pukekoimages[2]) { //The following code will only be called if these variables exist
        pukekoimages[0].style.display = "block"; //One image will be displayed
        pukekoimages[1].style.display = "none";
        pukekoimages[2].style.display = "none";
        number = 0; 

        setInterval(function(){  //The following code will be called every 300 milliseconds (3 seconds)
            
            for(i=0; i<=2; i++) { //For loop for javascript
                pukekoimages[i].style.display = "none"; //Makes all images display nothing.
            }
            
            
            console.log(number);
            
            if(number<=2) {
                pukekoimages[number].style.display = "block"; //One image will be displayed
            }
            
            number++;
            
            if(number>=3) {
                number=0;
            }
            

        }, 3000); 
    }

    var keruruimage1 = document.getElementById("keruruimage1"); //Creating variables to make my life easier
    var keruruimage2 = document.getElementById("keruruimage2");
    var keruruimage3 = document.getElementById("keruruimage3");

    let keruruimages = [keruruimage1, keruruimage2, keruruimage3];

    if (keruruimages[0], keruruimages[1], keruruimages[2]) { //The following code will only be called if these variables exist
        keruruimages[0].style.display = "block"; //One image will be displayed
        keruruimages[1].style.display = "none";
        keruruimages[2].style.display = "none";
        number = 0; 

        setInterval(function(){  //The following code will be called every 300 milliseconds (3 seconds)
            
            for(i=0; i<=2; i++) { //For loop for javascript
                keruruimages[i].style.display = "none"; //Makes all images display nothing.
            }
            
            
            console.log(number);
            
            if(number<=2) {
                keruruimages[number].style.display = "block"; //One image will be displayed
            }
            
            number++;
            
            if(number>=3) {
                number=0;
            }
            

        }, 3000); 
    } 
}); */


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
    console.log("working");
    document.getElementById("details").style.display = "block";
}

function testing(){
    document.getElementById("details").style.display = "none";
}