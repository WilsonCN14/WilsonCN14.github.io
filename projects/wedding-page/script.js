/* Automatic slideshow in Header *************************
*/
let headerPicIndex = 0;
nextHeaderPic();

function nextHeaderPic() {
    let i;
    let pics = document.querySelectorAll(".headerPic");

    for (i=0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }

    headerPicIndex ++;

    if (headerPicIndex > pics.length) {headerPicIndex = 1}
    pics[headerPicIndex - 1].style.display = "block";
    setTimeout(nextHeaderPic, 6000);
}

/* Manual slideshow in Our Story *************************
*/
let chapterIndex = 1;
showChapter(chapterIndex);

function nextChapter(num) {
    showChapter(chapterIndex += num);
}

function showChapter(index) {
    let i;
    let chapters = document.querySelectorAll(".chapter");
    if (index > chapters.length) {chapterIndex = 1}
    if (index < 1) {chapterIndex = chapters.length}

    for (i = 0; i < chapters.length; i++) {
        chapters[i].style.display = "none";
    }

    chapters[chapterIndex - 1].style.display = "block";
}