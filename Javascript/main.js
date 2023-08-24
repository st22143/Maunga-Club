document.addEventListener("DOMContentLoaded", function(){
    
    infoButton = document.getElementById("info_button");
    details = document.getElementById("details");
    exitDetails = document.getElementById("exit_details");

    
    if (infoButton && details) {
        
        infoButton.onclick = function() {
            details.style.display = "block";}

        exitDetails.onclick = function() {
            details.style.display = "none";} 

        }

})