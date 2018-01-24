window.onscroll = function () { myFunction() };
var percentage = -.5;
var screenWidthBreak = 999;
function myFunction() {
    var scrollers = document.getElementsByClassName("tscroll");

    for (var i = 0; i < scrollers.length; i++) {
        var y = 0;
        switch (i) {
            case 0:
                if (window.innerWidth <= screenWidthBreak) {
                    y = (document.documentElement.scrollTop * percentage) + (i * 100);
                } else {
                    y = (document.documentElement.scrollTop * percentage) + (i * 100);
                }
                break;
            case 1:
                if (window.innerWidth <= screenWidthBreak) {
                    y = (document.documentElement.scrollTop * percentage) + (i * 600);
                } else {
                    y = (document.documentElement.scrollTop * percentage) + (i * 600);
                }
                break;
            case 2:
                if (window.innerWidth <= screenWidthBreak) {
                    y = (document.documentElement.scrollTop * percentage) + (i * 710);
                } else {
                    y = (document.documentElement.scrollTop * percentage) + (i * 625);
                }
                break;
            case 3:
                if (window.innerWidth <= screenWidthBreak) {
                    y = (document.documentElement.scrollTop * percentage) + (i * 1000);
                } else {
                    y = (document.documentElement.scrollTop * percentage) + (i * 920);
                }
                break;
        }
        scrollers[i].style.backgroundPosition = "0px " + y + "px";
    }
}