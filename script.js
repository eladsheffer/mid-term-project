var images = [];
var i = 0;
images[0] = "images/250X110668568400.jpg";
images[1] = "images/banner_atar.jpg";
images[2] = "images/paz_250x110103131473.jpg";
images[3] = "images/paz_250x110059890678.jpg";

function displayImg() {
    if (i >= images.length - 1) { i = 0; }
    document.getElementById("img").src = images[i];
    i++;
}

function changeImg() {
    setInterval(displayImg(), 1000);
}