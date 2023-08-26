document.addEventListener("DOMContentLoaded", function(){
    
    var gallery_images = [
        document.getElementById("cabin"),
        document.getElementById("kakapo"),
        document.getElementById("pukeko"),
        document.getElementById("keruru"),
        document.getElementById("dark")
    ];
    
    var placeholder = 0;
    var rotation; // Declare the interval variable outside the function
    var switched = false;
    var clicked = false;
   

    function pause(pauseButton){

        
        if (clicked == false) {
            
            clearInterval(rotation);
            clicked = true;
            document.getElementById("pause").innerHTML = "Unpause";
            
        } 
        
        else {
            
            if(pauseButton) {
    
                rotation = setInterval(function () {
                    gallery_images[placeholder].style.display = "none";
                    placeholder = (placeholder + 1) % gallery_images.length;
                    gallery_images[placeholder].style.display = "block";
                }, 3000);
    
                clicked = false;
                document.getElementById("pause").innerHTML = "Pause";

            }

        }
    };
    
    function switchGallery(gallery_images) {
    
        for (var i = 1; i < gallery_images.length; i++) {
            gallery_images[i].style.display = "none";
        }

    
        rotation = setInterval(function () {
            if(switched == false){
                gallery_images[placeholder].style.display = "none";
                placeholder = (placeholder + 1) % gallery_images.length;
                gallery_images[placeholder].style.display = "block";
            }
        }, 3000);
    
    
    }
    
    document.getElementById("pause").onclick = function(){pause(true);}
    
    document.getElementById("left").onclick = function(){

        switched = true;
        console.log("left");
        gallery_images[placeholder].style.display = "none";
        placeholder --;

        if (placeholder < 0){
            placeholder = 3;
        }

        gallery_images[placeholder].style.display = "block";

        pause(false);
    }

    document.getElementById("right").onclick = function(){

        switched = true;

        gallery_images[placeholder].style.display = "none";
        placeholder ++;
        console.log("right", placeholder);

        if (placeholder > gallery_images.length-1){
            placeholder = 0;
        }

        gallery_images[placeholder].style.display = "block";

        pause(false);
    }

    if (gallery_images.every(image => image != null)) {
        switchGallery(gallery_images);
    }
    

})    


