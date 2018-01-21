window.onscroll = function() {myFunction()};
var percentage = -.5;
function myFunction() {
    var scrollers = document.getElementsByClassName("tscroll");

    for(var i = 0; i < scrollers.length; i++) {
        y = (document.documentElement.scrollTop * percentage) + (i * 100);
        scrollers[i].style.backgroundPosition="0px " + y + "px";
    }
}