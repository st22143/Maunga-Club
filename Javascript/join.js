document.addEventListener("DOMContentLoaded", function(){ //The following only executes if the website is loaded.

    var date; //Declared variables here so other functions can access them
    var days;
    var hours;
    var minutes;
    var seconds;

    setInterval(function(){
        date = new Date(); //Inbuilt date function
        days = date.getDay(); //Gets the days and other properties from the date function for the purpose of displaying the booking times
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        if (days == 0){
            days = 7; //When it is Sunday the day is set to 0 instead of 7. This will ensure that the day is 7 on Sundays.
        }
        
        if (days > 0){

            if(days <= 4) { //Checks if days are below or equal to 4 which represents Thursday
                
                timeleft = String(4-days + " days ") + String(24-hours-1 + " hours ") + String(60-minutes + " minutes ") + String(60-seconds + " seconds ");
                document.getElementById("time").innerHTML = timeleft;
                document.getElementById("bookings").innerHTML = "Time until bookings start:";
            }

        }
        //Checks if days are greater than Thursday. Bookings should only be made on Thursday
        if(days > 4) { 

            timeuntilweekends = String(7-days + " days ") + String(24-hours-1 + " hours ") + String(60-minutes-1 + " minutes ") + String(60-seconds + " seconds ");
            document.getElementById("time").innerHTML = timeuntilweekends;
            document.getElementById("bookings").innerHTML = "Time until bookings end:";
            
            if(7-days <= 1){
                var paragraphs = document.querySelectorAll("#timebox p"); //selects all elements of #timebox p
                for (var i = 0; i < paragraphs.length; i++) { 
                    paragraphs[i].style.color = "rgb(255, 53, 53)"; //Changes the colour of each one
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
        console.log(name.trim());
        
        if(/\d+/.test(name)) { //Checks if there are numbers in name
            window.scrollTo({ top: 0, behavior: "smooth" });
            name_error = document.getElementById("nameError");
            name_error.innerHTML = "Letters only";
            setTimeout(function(){
                name_error.innerHTML = ""; //Error message will go away after 10 seconds
            }, 10000)
        }
        else{ //Checks if any of the following elements are empty or not
            if(name.trim() == "" || email.trim() == "" || address.trim() == "" || addressproof.trim() == "" || idproof.trim() == ""){
                document.getElementById("submitted").innerHTML = "Some of your fields are empty!";
                console.log("fields are empty");
            }
            else{
                if(days > 4){
                    document.getElementById("submitted").innerHTML = "Successful";
                    console.log("fields are good");
                }
                else{
                    document.getElementById("submitted").innerHTML = "Sucessful. Please be aware that chalet bookings are only available from Friday to Sunday.";
                }
            }
        }

    }

})