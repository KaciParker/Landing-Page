window.onscroll = function () { myFunction() };
var percentage = -.5;
function myFunction() {
    var scrollers = document.getElementsByClassName("tscroll");

    for (var i = 0; i < scrollers.length; i++) {
        var y = 0;
        switch (i) {
            case 0:
                y = (document.documentElement.scrollTop * percentage) + (i * 100);
                break;
            case 1:
                y = (document.documentElement.scrollTop * percentage) + (i * 600);
                break;
            case 2:
                console.log("here")
                y = (document.documentElement.scrollTop * percentage) + (i * 555);
                break;
            case 3:
                y = (document.documentElement.scrollTop * percentage) + (i * 850);
                break;
        }
        scrollers[i].style.backgroundPosition = "0px " + y + "px";
    }
}