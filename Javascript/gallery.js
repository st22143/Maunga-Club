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
    
    function switchGallery(images) {
    
        for (var i = 1; i < images.length; i++) {
            images[i].style.display = "none";
        }
    
        rotation = setInterval(function () {
            images[placeholder].style.display = "none";
            placeholder = (placeholder + 1) % images.length;
            images[placeholder].style.display = "block";
        }, 3000);
    
        var clicked = false;
    
        document.getElementById("pause").onclick = function () {
    
            if (clicked == false) {
    
                clearInterval(rotation);
                clicked = true;
                document.getElementById("pause").innerHTML = "Unpause";
    
            } 
            
            else {
                
                rotation = setInterval(function () {
                    images[placeholder].style.display = "none";
                    placeholder = (placeholder + 1) % images.length;
                    images[placeholder].style.display = "block";
                }, 3000);
    
                clicked = false;
                document.getElementById("pause").innerHTML = "Pause";
    
            }
        };
    }
    
    if (gallery_images.every(image => image != null)) {
        switchGallery(gallery_images);
    }
    

})    


