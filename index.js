var numberofdrumbuttons = document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberofdrumbuttons ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
    //this.innerhtml passes the button clicked*/
        playsound(this.innerHTML);
        animation(this.innerHTML);
    });
}

document.addEventListener("keydown" , function(event)
{
    /*passes keyboard button pressed*/
    playsound(event.key);
    animation(event.key);
});

/*creating function to playsound*/
function playsound(key)
{
    switch(key)
        {
            case "y":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "i":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
                   
            case "t":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;   
                
            case "s":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break; 
                
            case "m":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;  
                
            case "e":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                 break;
                
            default: console.log(key);  
        }                           
} 

/*creating function animation*/
function animation(button)
{
    var currentbutton =  document.querySelector("." + button);

/*adding animation to this from css*/  
    currentbutton.classList.add("pressed");

    setTimeout(function() {
        currentbutton.classList.remove("pressed");
    }, 100);
/*setting timeout feature parameter function , time(ms)*/                                             
}