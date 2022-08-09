
//detecting button press


var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrums ;i++){

    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}

function handleClick (){

   var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);

   buttonAnimation(buttonInnerHTML);

}

// detecting keyboard press

   document.addEventListener("keydown", function(event)
   
   {

    makeSound(event.key);

    buttonAnimation(event.key);

   });

   function makeSound(key) {


    switch(key) {
        case "w":
            var audio = new Audio("/nature/sounds/bird.wav");
            audio.play();
    
        break;
    
    
        case "a":
            var audio = new Audio("/nature/sounds/bird-2.wav");
            audio.play();
        
        break;
    
    
        case "s":
            var audio = new Audio("/nature/sounds/bird-3.wav");
            audio.play();
            
        break;
    
    
        case "d":
            var audio = new Audio("/nature/sounds/night.wav");
            audio.play();
                
        break;
        
        case "j":
            var audio = new Audio("/nature/sounds/storm.wav");
            audio.play();
                
        break;
    
        
        case "k":
            var audio = new Audio("/nature/sounds/storm-2.wav");
            audio.play();
                
        break;
    
     

    
        default:
            console.log(this.innerHTML);
    
       }

   }

  

   function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){

        activeButton.classList.remove("pressed");


    }, 100);

   }
  
    
   