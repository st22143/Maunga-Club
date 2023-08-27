var headings = [ //All the headings
    "Cabin",
    "Kakapo",
    "Pukeko",
    "Keruru",
    "View"
]

var time = 3000;

document.addEventListener("DOMContentLoaded", function(){
    
    var gallery_images = [ //This gets access to all the divs
        document.getElementById("cabin"),
        document.getElementById("kakapo"),
        document.getElementById("pukeko"),
        document.getElementById("keruru"),
        document.getElementById("dark")
    ];

    
    var placeholder = 0; //THe placeholder variable represents the number of rotations
    var rotation; // Declare the interval variable outside the function to allow other functions to access them
    var switched = false;
    var clicked = false;
   

    function pause(pauseButton){ //Pause button (I recommend reading this after the switchGallery function)

        
        if (clicked == false) { //Checks if the pause button is already active
            
            clearInterval(rotation); //Will stop the rotations from occuring
            clicked = true;
            document.getElementById("pause").innerHTML = "Unpause";
            
        } 
        
        else {
            
            if(pauseButton) { //pauseButton is a boolean. Buttons calling the pause functions will have true in the parameter
    
                rotation = setInterval(function () { //Starts interval again
                    gallery_images[placeholder].style.display = "none";
                    placeholder = (placeholder + 1) % gallery_images.length;
                    document.getElementById("heading").innerHTML = headings[placeholder];
                    gallery_images[placeholder].style.display = "block";
                }, time);
    
                clicked = false;
                document.getElementById("pause").innerHTML = "Pause";

            }

        }
    };
    
    function switchGallery(gallery_images) {
    
        for (var i = 1; i < gallery_images.length; i++) { //Clears all images
            gallery_images[i].style.display = "none";
        }

    
        rotation = setInterval(function () { //Starts rotations
            if(switched == false){ //Checks if somebody has clicked left or right.
                gallery_images[placeholder].style.display = "none";  //Makes the current image display nothing
                placeholder = (placeholder + 1) % gallery_images.length; //Adds 1 to the placeholders and makes sure that is only in range of the gallery_image.length
                document.getElementById("heading").innerHTML = headings[placeholder]; //Displays heading
                gallery_images[placeholder].style.display = "block"; //Displays new image

            }
        }, time); //3000 millisecond interval (3 seconds)
    
    
    }
    
    document.getElementById("pause").onclick = function(){pause(true);}
    
    document.getElementById("left").onclick = function(){

        switched = true;

        gallery_images[placeholder].style.display = "none";
        placeholder --;
        console.log("left");
        
        if (placeholder < 0){
            placeholder = 3;
        }
        
        document.getElementById("heading").innerHTML = headings[placeholder];
        
        gallery_images[placeholder].style.display = "block";

        pause(false);
    }

    document.getElementById("right").onclick = function(){

        switched = true;

        gallery_images[placeholder].style.display = "none";
        placeholder ++;
        console.log("right", placeholder);
        
        if (placeholder > gallery_images.length-1){ //-1 since the index starts at 0
            placeholder = 0;
        }

        document.getElementById("heading").innerHTML = headings[placeholder];

        gallery_images[placeholder].style.display = "block";

        pause(false);
    }

    if (gallery_images.every(image => image != null)) {
        switchGallery(gallery_images);
    }
    

})    


