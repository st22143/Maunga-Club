document.addEventListener("DOMContentLoaded", function(){ //Checks if the website has loaded
    
    infoButton = document.getElementById("info_button");
    details = document.getElementById("details");
    exitDetails = document.getElementById("exit_details");

    
    if (infoButton && details) { //Checks if the elements exist
        
        infoButton.onclick = function() { //Plays the following code on click
            details.style.display = "block";}

        exitDetails.onclick = function() {
            details.style.display = "none";} 

        }

})