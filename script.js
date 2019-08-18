var images = [];
var i;
images[0] = "../images/250X110668568400.jpg";
images[1] = "../images/banner_atar.jpg";
images[2] = "../images/paz_250x110103131473.jpg";
images[3] = "../images/paz_250x110059890678.jpg";

function changeImg() {
    for (i = 0; i < images.length; i++) {
        setInterval(document.getElementById("img").src = images[i], 5000);
    }
}