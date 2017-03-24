// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here


    CountDownTimer('6/17/2017 09:00 AM', 'commence1');
    CountDownTimer('6/17/2017 02:00 PM', 'commence2');
    CountDownTimer('6/17/2017 07:00 PM', 'commence3');

function CountDownTimer(dt, id) {
    var end = new Date(dt);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + ':';
        document.getElementById(id).innerHTML += hours + ':';
        document.getElementById(id).innerHTML += minutes + ':';
        document.getElementById(id).innerHTML += seconds + '';
    }

    timer = setInterval(showRemaining, 1000);
}

    var elements = document.getElementsByTagName('li');
    var tipTimer, tipId;

    for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener ('mouseover', function(event){
      // what if I wanted to send a parameter ('eat') with the call to showMsg?
      tipId = document.getElementById(this.id + "Tip");
      tipTimer = setTimeout(showMsg, 1000);
    });

    elements[i].addEventListener ('mouseout', function(){
      clearTimeout(tipTimer);
      tipId.style.opacity = 0;
    });
    }

    function showMsg(){
      //can I use "this" to find out which object called the function?
      tipId.style.opacity = 1;
      tipId.style.transition = 'all 1s';
    }

});
