//detecting button press
var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


//dectecting keyboard press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


//the function to makesound
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBass = new Audio("kick-bass.mp3");
            kickBass.play();
            break;

        default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
