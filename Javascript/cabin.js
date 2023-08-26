var currentChalet = "Kakapo";
var clicked = false;
var rotation;
var switched = false;
var number = 0;


var kakapoheadings = ["Bedroom", "Cabin", "Hallway"];
var pukekoheadings = ["Adult's Bedroom", "Bathroom", "Chalet View"];
var kereruheadings = ["Adult's Bedroom", "Children's Bedroom", "Kitchen"];

 


document.addEventListener("DOMContentLoaded", function() { //Checks calls the following code if the website is loaded
    
    var heading = document.getElementById("heading");

    var kakapocabin_images = [
        document.getElementById("kakapoimage1"),
        document.getElementById("kakapoimage2"),
        document.getElementById("kakapoimage3")
    ];

    var pukekocabin_images = [
        document.getElementById("pukekoimage1"),
        document.getElementById("pukekoimage2"),
        document.getElementById("pukekoimage3")
    ];

    var kerurucabin_images = [
        document.getElementById("keruruimage1"),
        document.getElementById("keruruimage2"),
        document.getElementById("keruruimage3")
    ];

    var cabin_images = kakapocabin_images;

    function pause(pauseButton) {

        if (clicked == false) {
            
            clearInterval(rotation);
            clicked = true;
            document.getElementById("pause").innerHTML = "Unpause";
            
        } 
        
        else {
            
            if(pauseButton) {
    
                rotation = setInterval(function () {
                    kakapocabin_images[number].style.display = "none";
                    pukekocabin_images[number].style.display = "none";
                    kerurucabin_images[number].style.display = "none";
                    
                    number++;
                    
                    if (number >= 3) {
                        number = 0;
                    }
        
                    if(currentChalet == "Kakapo"){
                        heading.innerHTML = kakapoheadings[number];
                    }
                    
                    if(currentChalet == "Pukeko"){
                        heading.innerHTML = pukekoheadings[number];
                    }
        
                    if(currentChalet == "Kereru"){
                        heading.innerHTML = kereruheadings[number];
                    }
        
                    kakapocabin_images[number].style.display = "block";
                    pukekocabin_images[number].style.display = "block";
                    kerurucabin_images[number].style.display = "block";
        
                }, 3000);
    
                clicked = false;
                document.getElementById("pause").innerHTML = "Pause";

            }

        }
    }

    function switchCabin() {


        for (var i = 1; i < cabin_images.length; i++) { //Starts at 1 since we wouldn't want the first image to be invisible
            cabin_images[i].style.display = "none";
        }

            
        rotation = setInterval(function() {
            
            kakapocabin_images[number].style.display = "none";
            pukekocabin_images[number].style.display = "none";
            kerurucabin_images[number].style.display = "none";
            
            number++;
            
            if (number >= 3) {
                number = 0;
            }

            if(currentChalet == "Kakapo"){
                heading.innerHTML = kakapoheadings[number];
            }
            
            if(currentChalet == "Pukeko"){
                heading.innerHTML = pukekoheadings[number];
            }

            if(currentChalet == "Kereru"){
                heading.innerHTML = kereruheadings[number];
            }

            kakapocabin_images[number].style.display = "block";
            pukekocabin_images[number].style.display = "block";
            kerurucabin_images[number].style.display = "block";

        }, 3000);
    }
    
    document.getElementById("pause").onclick = function(){pause(true);}

    
    document.getElementById("openkakapo").onclick = function() {
        currentChalet == "Kakapo";
        heading.innerHTML = kakapoheadings[number];
        document.getElementById("kakapotab").style.display = "block";
        document.getElementById("pukekotab").style.display = "none";
        document.getElementById("kerurutab").style.display = "none";
        document.getElementById("infotitle").textContent = "Kakapo";
        document.getElementById("infodetails").innerHTML =
        "Adults: 10 <br><br>" +
        "Children: 30 <br><br>" +
        "This is the biggest chalet suited for the largest of families. <br><br>"+
        "Large Kitchen. Great amenities.";
        
    }
    
    document.getElementById("openpukeko").onclick = function() {
        currentChalet = "Pukeko";
        heading.innerHTML = pukekoheadings[number];
        document.getElementById("kakapotab").style.display = "none";
        document.getElementById("pukekotab").style.display = "block";
        document.getElementById("kerurutab").style.display = "none";
        document.getElementById("infotitle").textContent = "Pukeko";
        document.getElementById("infodetails").innerHTML = 
        "Adults: 6 <br><br>" +
        "Children: 15 <br><br>" +
        "Great for large big families wanting a chalet to themselves.<br><br>" +
        "Limits on adults and children to ensure a comfortable stay.";
        
    }
    
    document.getElementById("openkereru").onclick = function() {
        currentChalet = "Kereru";
        heading.innerHTML = kereruheadings[number];
        document.getElementById("kakapotab").style.display = "none";
        document.getElementById("pukekotab").style.display = "none";
        document.getElementById("kerurutab").style.display = "block";
        document.getElementById("infotitle").textContent = "Keruru";
        document.getElementById("infodetails").innerHTML =
        "Adults: 2 <br><br>" +
        "Children: 4 <br><br>" +
        "Great option for a family of 4 to 6. <br><br>"+
        "2 bedrooms. Separate living area. Perfect for families of 2-4 children.";
        
    }

    document.getElementById("left").onclick = function(){
        switched = true;

        kakapocabin_images[number].style.display = "none";
        pukekocabin_images[number].style.display = "none";
        kerurucabin_images[number].style.display = "none";

        number--;

        if(number<0){
            number = 2;
        }

        kakapocabin_images[number].style.display = "block";
        pukekocabin_images[number].style.display = "block";
        kerurucabin_images[number].style.display = "block";

        if(currentChalet == "Kakapo"){
            heading.innerHTML = kakapoheadings[number];
        }
        
        if(currentChalet == "Pukeko"){
            heading.innerHTML = pukekoheadings[number];
        }

        if(currentChalet == "Kereru"){
            heading.innerHTML = kereruheadings[number];
        }

        pause(false);
    }

    document.getElementById("right").onclick = function(){
        switched = true;

        kakapocabin_images[number].style.display = "none";
        pukekocabin_images[number].style.display = "none";
        kerurucabin_images[number].style.display = "none";

        number++;

        if(number>=3){
            number = 0;
        }

        kakapocabin_images[number].style.display = "block";
        pukekocabin_images[number].style.display = "block";
        kerurucabin_images[number].style.display = "block";

        if(currentChalet == "Kakapo"){
            heading.innerHTML = kakapoheadings[number];
        }
        
        if(currentChalet == "Pukeko"){
            heading.innerHTML = pukekoheadings[number];
        }

        if(currentChalet == "Kereru"){
            heading.innerHTML = kereruheadings[number];
        }

        pause(false);
        
    }
    
    switchCabin();

    document.getElementById("details_button").onclick = function(){
        document.getElementById("details").style.display = "block";
    }

    document.getElementById("exit_details").onclick = function(){
        document.getElementById("details").style.display = "none";
    }

})




