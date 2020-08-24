var seconds = 20;
var t;

function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
}

function countdown() {

    // starts countdown
    secondPassed();

    if (seconds != 0) { 
        seconds--;
        t = setTimeout("countdown()", 1000);
        changeColor();
    }

}

function cdpause() {
    // pauses countdown
    clearTimeout(t);
    document.body.style.background = "blue";

};

function cdreset() {
    // resets countdown
    cdpause();
    secondPassed();
    seconds = 20;
    document.body.style.background = "green";

};
         
function changeColor() {

    if (seconds <= 20 && seconds > 10) {
    document.body.style.background = "green";
    }
    
    else if (seconds <= 10 && seconds > 5) {
    document.body.style.background = "yellow";
    }
    
    else {
    document.body.style.background = "red";
    }

}