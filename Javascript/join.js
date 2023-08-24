document.addEventListener("DOMContentLoaded", function(){

    setInterval(function(){
        var date = new Date(); //Inbuilt date function
        var days = date.getDay(); //Gets the days and other properties from the date function for the purpose of displaying the booking times
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        
        
        if(days <= 4) {
            timeleft = String(4-days + " days ") + String(24-hours + " hours ") + String(60-minutes + " minutes ") + String(60-seconds + " seconds ");
            document.getElementById("time").innerHTML = timeleft;
            document.getElementById("bookings").innerHTML = "Time until bookings start";
        }
        
        if(days > 4) {
            timeuntilweekends = String(7-days + " days ") + String(24-hours + " hours ") + String(60-minutes + " minutes ") + String(60-seconds + " seconds ");
            document.getElementById("time").innerHTML = timeuntilweekends;
            document.getElementById("bookings").innerHTML = "Time until bookings end";
            
            if(7-days <= 1){
                var paragraphs = document.getElementsByTagName("p");
                for (var i = 0; i < paragraphs.length; i++) {
                    paragraphs[i].style.color = "red";
                }   
            }
        }
        
    }, 10) //Low time allows the timer to pop up faster on load
    
    var submit = document.getElementById("submit");
    
    submit.onclick = function(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var addressproof = document.getElementById("addressproof").value;
        var idproof = document.getElementById("idproof").value;
        
        if(/\d+/.test(name)) { //Checks if there are numbers in name
            document.getElementById("nameError").innerHTML = "Letters only";
            setTimeout(function(){
                document.getElementById("nameError").innerHTML = ""; //Error message will go away after 10 seconds
            }, 10000)
        }
        else{
            if(name.trim() == "" && email.trim() == "" && address.trim() == "" && addressproof.trim() == "" && idproof.trim() == ""){
                document.getElementById("submitted").innerHTML = "Successful";
                console.log("fields are good");
            }
            else{
                document.getElementById("Some of your fields are empty!");
                console.log("fields are empty");
            }
        }

    }

})