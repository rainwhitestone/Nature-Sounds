
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
        case "n":
            var audio = new Audio("n-sound.wav");
            audio.play();
    
        break;
    
    
        case "a":
            var audio = new Audio("a-sound.wav");
            audio.play();
        
        break;
    
    
        case "t":
            var audio = new Audio("t-sound.wav");
            audio.play();
            
        break;
    
    
        case "u":
            var audio = new Audio("u-sound.wav");
            audio.play();
                
        break;
        
        case "r":
            var audio = new Audio("r-sound.wav");
            audio.play();
                
        break;
    
        
        case "e":
            var audio = new Audio("e-sound.wav");
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
  
    
   
