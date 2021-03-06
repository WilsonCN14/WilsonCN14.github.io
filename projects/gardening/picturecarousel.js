// Citation: My picture carousel code was influenced by the slideshow code from w3schools.com (https://www.w3schools.com/howto/howto_js_slideshow.asp)

var pictureIndex = 0;
var pictures = document.getElementsByClassName("carouselPic");

function prevPic () {
    pictureIndex--;
    
    if (pictureIndex < 1) {
        pictureIndex = pictures.length;
    }
    
    movePictures(pictureIndex);
}

function nextPic () {
    pictureIndex++;
    
    if (pictureIndex > pictures.length) {
        pictureIndex = 1;
    }
    
    movePictures(pictureIndex);
}

function movePictures(pictureIndex) {
    for (i=0; i < pictures.length; i++) {
        pictures[i].style.display = "none";
    }

    console.log(pictureIndex);
    pictures[pictureIndex-1].style.display = "block";
}

function automaticPic () {
    nextPic();
    setTimeout(automaticPic, 3000);
}

automaticPic();
document.getElementById("prev").addEventListener("click", prevPic);
document.getElementById("next").addEventListener("click", nextPic);