var timerInterval = null;

$(document).ready(function() {

    $("#show-button").click(
        
        
        
        function () {
        var hid = document.getElementsByClassName("exp");
        if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
            hid[0].style.visibility = "visible";
        }
        $("#show-button").hide()
        $("#contest-button").hide()

        stop();
        value = 10;
        timerInterval = setInterval(changeValue, 1000);  

    }
    
    );

});

function start() {
    stop(); // stoping the previous counting (if any)
    value = 0;
    timerInterval = setInterval(changeValue, 1000);  
  }

function changeValue() {
    if (value > 0){
    document.getElementById("countdown").innerHTML = --value;
    }
    else{
        $("#contest-button").show()
    }
}

var stop = function() {
    clearInterval(timerInterval);
}