/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/

function typeEffect(element, speed) {
    var text = $(element).text();
    $(element).html("");
    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            $(element).append(text.charAt(i));
            i++;
        }
        else {
            clearInterval(timer);
        }
    }, speed);
}
$(document).ready(function () {
            var speed = 75;
            var delay = $("#text").text().length * speed + speed;
            typeEffect($("#text"), speed);
            setTimeout(function () {
                $("#text").css("display", "inline-block");
                typeEffect($("#text"), speed);
            }, delay);
